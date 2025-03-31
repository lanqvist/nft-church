package ru.nft.church_nft.service.dao.response;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.Builder;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

import java.math.BigDecimal;
import java.time.OffsetDateTime; // Or java.util.Date if OffsetDateTime is not available
import java.util.Map;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class YookassaStatusPaymentResponse {

    private String id;
    private String status;
    private Boolean paid;

    @JsonProperty("amount")
    private Amount amount;

    @JsonProperty("payment_method")
    private PaymentMethod paymentMethod;

    @JsonProperty("confirmation")
    private Confirmation confirmation;

    private String description;

    @JsonProperty("created_at")
    private OffsetDateTime createdAt;

    private Recipient recipient;
    private Boolean refundable;
    private Boolean test;
    private Map<String, Object> metadata; // Or create a specific Metadata class

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Amount {
        private BigDecimal value;
        private String currency;
    }

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class PaymentMethod {
        private String type;
        private String id;
        private Boolean saved;
        private BankCard card;
        private String title;
    }

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class BankCard {
        private String first6;
        private String last4;
        private String expiryMonth;
        private String expiryYear;
        private String cardType;
        private String issuerCountry;
        private String issuerName;
        private CardProduct cardProduct;
    }

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class CardProduct {
        private String code;
        private String name;
    }

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Confirmation {
        private String type;

        @JsonProperty("confirmation_url")
        private String confirmationUrl; // The URL to redirect the user
        private String returnUrl;
    }

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Recipient {
        @JsonProperty("account_id")
        private String accountId;
        @JsonProperty("gateway_id")
        private String gatewayId;
    }
}
