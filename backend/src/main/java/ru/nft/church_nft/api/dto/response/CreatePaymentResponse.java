package ru.nft.church_nft.api.dto.response;

import lombok.Builder;
import lombok.Data;
import ru.nft.church_nft.api.dto.Confirmation;

@Data
@Builder
public class CreatePaymentResponse {

    private String id;

    private String status;

    private Boolean paid;

    private Amount amount;

    private Confirmation confirmation;

    private String description;

    @Data
    @Builder
    public static class Amount {
        private String value;
    }
}
