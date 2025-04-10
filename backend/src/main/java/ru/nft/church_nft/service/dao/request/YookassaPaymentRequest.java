package ru.nft.church_nft.service.dao.request;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@Builder
@JsonInclude(JsonInclude.Include.NON_NULL) // Exclude null fields from the JSON
public class YookassaPaymentRequest {

    @Valid
    @NotNull(message = "Amount is required")
    private Amount amount;

    @Valid
    @NotNull(message = "Confirmation is required")
    private Confirmation confirmation;

    private Boolean capture;

    private String description;

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    @JsonInclude(JsonInclude.Include.NON_NULL)
    public static class Amount {
        @NotNull(message = "Value is required")
        private String value;

        @NotBlank(message = "Currency is required")
        @Pattern(regexp = "^[A-Z]{3}$", message = "Currency must be a 3-letter ISO currency code")
        private String currency;
    }

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    @JsonInclude(JsonInclude.Include.NON_NULL)
    public static class Confirmation {
        @NotBlank(message = "Type is required")
        private String type;

        @NotBlank(message = "Return url is required")
        private String return_url;
    }
}
