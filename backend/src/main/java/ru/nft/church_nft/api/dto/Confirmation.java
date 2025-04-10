package ru.nft.church_nft.api.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Confirmation {

    private String confirmation_token;

    private String return_url;
}
