package ru.nft.church_nft;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = {"ru.nft.church_nft"}) // add JacksonConfig as a class
public class ChurchNftApplication {

	public static void main(String[] args) {
		SpringApplication.run(ChurchNftApplication.class, args);
	}

}
