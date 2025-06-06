package ru.nft.church_nft.api.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

@Data
@AllArgsConstructor
public class Confirmation {

    private String type;

    @JsonProperty("confirmation_url")
    private String confirmationUrl;
}
