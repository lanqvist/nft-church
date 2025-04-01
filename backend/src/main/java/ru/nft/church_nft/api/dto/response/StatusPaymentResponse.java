package ru.nft.church_nft.api.dto.response;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class StatusPaymentResponse {

    private String status;

    private Boolean paid;

    private Amount amount;

    @Data
    @Builder
    public static class Amount {
        private String value;
    }

}
