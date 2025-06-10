package ru.nft.church_nft.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import ru.nft.church_nft.api.dto.request.GiftsRequest;
import ru.nft.church_nft.api.dto.response.ProcessGiftResponse;
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

    public ResponseEntity<ProcessGiftResponse> processGifts(String donateId, List<GiftsRequest.Gift> gifts, String platformUrl) {

        if(!giftsRepo.existsByDonates(donatesRepo.findByDonateId(donateId))){
            for (GiftsRequest.Gift gift : gifts) {
                giftsRepo.save(Gifts.builder()
                        .name(gift.getName())
                        .type(gift.getGiftType())
                        .address(gift.getAddress())
                        .donates(donatesRepo.findByDonateId(donateId))
                        .build());

            }
            Donates donates = donatesRepo.findByDonateId(donateId);
            Map<String, Object> templateVariables = new HashMap<>();
            templateVariables.put("benefactorName", platformUrl);
            emailService.sendMessageWithHTMLTemplate(donates.getMail(), "Благодарим за Ваш вклад в строительство храма преподобного Сергия Радонежского!", "get_token_email_template", templateVariables);

        }
        boolean hasEngraving = gifts.stream().anyMatch(gift -> "Engraving".equals(gift.getGiftType()));


        long countOfEngraving = hasEngraving ? giftsRepo.countByType("Engraving") : -1;

        String url = (countOfEngraving != -1) ? platformUrl + "&engravingId=" + countOfEngraving : platformUrl;
        return ResponseEntity.ok(ProcessGiftResponse.builder()
                .url(url)
                .build());
    }
}
