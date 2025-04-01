package ru.nft.church_nft;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;

@Configuration
public class AppConfiguration { // Or any appropriate name for your configuration class

    @Bean
    public RestTemplate restTemplate() {
        return new RestTemplate();
    }
}
