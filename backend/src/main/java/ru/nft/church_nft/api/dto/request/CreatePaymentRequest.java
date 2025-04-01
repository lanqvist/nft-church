package ru.nft.church_nft.api.dto.request;

import lombok.Data;

@Data
public class CreatePaymentRequest {

    private Amount amount;

    private String email;

    @Data
    public static class Amount {
        private String value;
        private String currency;
    }
}
