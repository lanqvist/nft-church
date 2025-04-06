package ru.nft.church_nft.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import ru.nft.church_nft.api.dto.request.GiftsRequest;
import ru.nft.church_nft.domain.Donates;
import ru.nft.church_nft.domain.Gifts;
import ru.nft.church_nft.repository.DonatesRepo;
import ru.nft.church_nft.repository.GiftsRepo;

import java.util.List;
import java.util.Map;
import java.util.HashMap;

@Service
@Slf4j
@RequiredArgsConstructor
public class GiftService {

    private final GiftsRepo giftsRepo;
    private final DonatesRepo donatesRepo;
    private final EmailService emailService;

    public void processGifts(String paymentId, List<GiftsRequest.Gift> gifts, String platformUrl) {

        if(!giftsRepo.existsByDonates(donatesRepo.findByPaymentId(paymentId))){
            for (GiftsRequest.Gift gift : gifts) {
                giftsRepo.save(Gifts.builder()
                        .name(gift.getName())
                        .type(gift.getGiftType())
                        .address(gift.getAddress())
                        .donates(donatesRepo.findByPaymentId(paymentId))
                        .build());

            }
            Donates donates = donatesRepo.findByPaymentId(paymentId);
            Map<String, Object> templateVariables = new HashMap<>();
            templateVariables.put("benefactorName", "благотворитель!");
            emailService.sendMessageWithHTMLTemplate(donates.getMail(), "Пожертвование", "email_template", templateVariables);

        }
    }
}
