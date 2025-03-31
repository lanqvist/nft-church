package ru.nft.church_nft.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.nft.church_nft.domain.Donates;
import ru.nft.church_nft.domain.Gifts;

@Repository
public interface GiftsRepo extends JpaRepository<Gifts, Long> {
    boolean existsByDonates(Donates donates);
}
