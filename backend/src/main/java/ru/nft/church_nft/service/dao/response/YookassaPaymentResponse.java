package ru.nft.church_nft.service.dao.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import com.fasterxml.jackson.annotation.JsonInclude;

import java.math.BigDecimal;
import java.time.OffsetDateTime;
import java.util.Map;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class YookassaPaymentResponse {

    private String id;
    private String status;
    private boolean paid;
    private Amount amount;
    private Confirmation confirmation;

    @JsonProperty("created_at")
    private OffsetDateTime createdAt;

    private String description;
    private Map<String, Object> metadata;

    @JsonProperty("payment_method")
    private PaymentMethod paymentMethod;
    private Recipient recipient;
    private boolean refundable;
    private boolean test;

    @Data
    @JsonInclude(JsonInclude.Include.NON_NULL)
    public static class Amount {
        private BigDecimal value;
        private String currency;
    }

    @Data
    @JsonInclude(JsonInclude.Include.NON_NULL)
    public static class Confirmation {
        private String type;

        @JsonProperty("confirmation_token")
        private String confirmationToken;
    }

    @Data
    @JsonInclude(JsonInclude.Include.NON_NULL)
    public static class PaymentMethod {
        private String type;
        private String id;
        private boolean saved;
    }

    @Data
    @JsonInclude(JsonInclude.Include.NON_NULL)
    public static class Recipient {
        @JsonProperty("account_id")
        private String accountId;

        @JsonProperty("gateway_id")
        private String gatewayId;
    }
}