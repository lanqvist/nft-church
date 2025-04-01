package ru.nft.church_nft.api.dto.request;

import lombok.Data;
import ru.nft.church_nft.api.dto.Book;
import ru.nft.church_nft.api.dto.Engraving;
import ru.nft.church_nft.api.dto.Player;

import java.util.List;

@Data
public class GiftsRequest {
    private List<Gift> gifts;
    private String platformUrl;

    @Data
    public static class Gift {
        private String giftType;
        private String name;
        private String address;
    }
}
