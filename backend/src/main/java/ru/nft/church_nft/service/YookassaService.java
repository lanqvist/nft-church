package ru.nft.church_nft.service;

import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.server.ResponseStatusException;
import ru.nft.church_nft.api.dto.Confirmation;
import ru.nft.church_nft.api.dto.response.CreatePaymentResponse;
import ru.nft.church_nft.api.dto.response.StatusPaymentResponse;
import ru.nft.church_nft.domain.Donates;
import ru.nft.church_nft.repository.DonatesRepo;
import ru.nft.church_nft.service.dao.request.YookassaPaymentRequest;
import ru.nft.church_nft.service.dao.response.YookassaPaymentResponse;
import ru.nft.church_nft.service.dao.response.YookassaStatusPaymentResponse;

import java.util.UUID;
import java.util.concurrent.atomic.AtomicInteger;

@Service
@Slf4j
public class YookassaService {

    @Value("${yookassa.shopId}")
    private String shopId;

    @Value("${yookassa.secretKey}")
    private String secretKey;

    @Value("${yookassa.url}")
    private String yookassaUrl;

    @Value("${return.url}")
    private String returnUrl;

    private final RestTemplate restTemplate;

    private final DonatesRepo donatesRepo;

    private final EmailService emailService;

    private AtomicInteger orderNumberCounter = new AtomicInteger(0);

    @PostConstruct
    public void init() {
        Integer lastOrderNumber = donatesRepo.findMaxDonateId();
        if (lastOrderNumber != null) {
            orderNumberCounter.set(lastOrderNumber);
        }
    }

    public YookassaService(RestTemplate restTemplate, DonatesRepo donatesRepo, EmailService emailService) {

        this.restTemplate = restTemplate;
        this.donatesRepo = donatesRepo;
        this.emailService = emailService;
    }

    public ResponseEntity<CreatePaymentResponse> createPayment(String amountValue, String amountCurrency, String email) {
        HttpHeaders headersPayment = new HttpHeaders();
        headersPayment.setContentType(MediaType.APPLICATION_JSON);
        headersPayment.setBasicAuth(shopId, secretKey);
        String idempotence = UUID.randomUUID().toString();
        headersPayment.set("Idempotence-Key", idempotence);

        Integer number = 0;

        YookassaPaymentRequest.Amount amount = YookassaPaymentRequest.Amount.builder()
                .value(amountValue)
                .currency(amountCurrency)
                .build();

        YookassaPaymentRequest.Confirmation confirmation = YookassaPaymentRequest.Confirmation.builder()
                .type("redirect")
                .return_url("http://testURL")
                .build();

        int orderNumber = orderNumberCounter.incrementAndGet();
        YookassaPaymentRequest paymentRequest = YookassaPaymentRequest.builder()
                .amount(amount)
                .confirmation(confirmation)
                .description(String.valueOf(orderNumber))
                .build();

        HttpEntity<YookassaPaymentRequest> entity = new HttpEntity<>(paymentRequest, headersPayment);

        try {
            ResponseEntity<YookassaPaymentResponse> response = restTemplate.exchange(
                    yookassaUrl,
                    HttpMethod.POST,
                    entity,
                    YookassaPaymentResponse.class);

            if (response.getStatusCode().is2xxSuccessful()) {
                donatesRepo.save(Donates.builder()
                        .donate_id(response.getBody().getDescription())
                        .paymentId(response.getBody().getId())
                        .amount(response.getBody().getAmount().getValue().toString())
                        .currency(response.getBody().getAmount().getCurrency())
                        .status(response.getBody().getStatus())
                        .created_at(response.getBody().getCreatedAt())
                        .idempotence_key(idempotence)
                        .mail(email)
                        .build());
                return ResponseEntity.ok(CreatePaymentResponse.builder()
                        .id(response.getBody().getId())
                        .status(response.getBody().getStatus())
                        .paid(response.getBody().isPaid())
                        .amount(CreatePaymentResponse.Amount.builder()
                                .value(String.valueOf(response.getBody().getAmount().getValue()))
                                .currency(response.getBody().getAmount().getCurrency())
                                .build())
                        .confirmation(new Confirmation(response.getBody().getConfirmation().getConfirmationToken(), "url-example"))
                        .description(response.getBody().getDescription())
                        .build());
            } else {
                throw new ResponseStatusException(HttpStatus.valueOf(response.getStatusCodeValue()), "Yookassa API Error: " + response.getStatusCodeValue());
            }
        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException("Error creating payment: " + e.getMessage(), e);
        }
    }

   public ResponseEntity<StatusPaymentResponse> getPaymentStatus(String paymentId) {

       HttpHeaders headersCheck = new HttpHeaders();
       headersCheck.setContentType(MediaType.APPLICATION_JSON);
       headersCheck.setBasicAuth(shopId, secretKey);
       String idempotence = UUID.randomUUID().toString();
       headersCheck.set("Idempotence-Key", idempotence);

       HttpEntity<?> entity = new HttpEntity<>(headersCheck);

       try {
           String url = yookassaUrl + "/" + paymentId;
           System.out.println("Url for check: "+ url);
           ResponseEntity<YookassaStatusPaymentResponse> response = restTemplate.exchange(
                   url,
                   HttpMethod.GET,
                   entity,
                   YookassaStatusPaymentResponse.class);

           if (response.getStatusCode().is2xxSuccessful()) {
               Donates donates = donatesRepo.findByPaymentId(response.getBody().getId());
               donates.setStatus(response.getBody().getStatus());

               emailService.sendSimpleMessage(donates.getMail(), "Пожертвование", returnUrl + response.getBody().getId());
               return ResponseEntity.ok( StatusPaymentResponse.builder()
                       .status(response.getBody().getStatus())
                       .paid(response.getBody().getPaid())
                       .amount(StatusPaymentResponse.Amount.builder()
                               .value(String.valueOf(response.getBody().getAmount().getValue()))
                               .build())
                       .build());
           } else {
               throw new ResponseStatusException(HttpStatus.valueOf(response.getStatusCodeValue()), "Yookassa API Error: " + response.getStatusCodeValue());
           }

       } catch (Exception e) {
           throw new RuntimeException("Error getting payment status for payment ID: " + paymentId + ", " + e.getMessage(), e);
       }
   }
}


