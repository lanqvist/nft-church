package ru.nft.church_nft.api;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.nft.church_nft.api.dto.request.CreatePaymentRequest;
import ru.nft.church_nft.api.dto.request.GiftsRequest;
import ru.nft.church_nft.api.dto.response.CreatePaymentResponse;
import ru.nft.church_nft.api.dto.response.StatusPaymentResponse;
import ru.nft.church_nft.service.GiftService;
import ru.nft.church_nft.service.YookassaService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/payments")
@RequiredArgsConstructor
public class PaymentsController {

    private final YookassaService yookassaService;

    private final GiftService giftService;

    @PostMapping()
    public ResponseEntity<CreatePaymentResponse> createPayment(@RequestBody CreatePaymentRequest paymentRequest) {
        return yookassaService.createPayment(paymentRequest.getAmount().getValue(), paymentRequest.getEmail());
    }

    @GetMapping("/{paymentId}")
    public ResponseEntity<StatusPaymentResponse> getPaymentStatus(@PathVariable String paymentId) {
        return yookassaService.getPaymentStatus(paymentId);
    }

    @PostMapping("/{payment_id}")
    public ResponseEntity<Void> processGifts(
            @PathVariable String payment_id,
            @RequestBody GiftsRequest giftsRequest) {

        try {
            giftService.processGifts(payment_id, giftsRequest.getGifts(), giftsRequest.getPlatformUrl());
            return ResponseEntity.ok().build();

        } catch (Exception e) {
            System.err.println("Error processing gifts: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

}
