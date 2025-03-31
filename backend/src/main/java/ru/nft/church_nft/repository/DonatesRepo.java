package ru.nft.church_nft.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import ru.nft.church_nft.domain.Donates;

@Repository
public interface DonatesRepo extends JpaRepository<Donates, Long> {

    Donates findByPaymentId(String paymentId);

    @Query(value = "SELECT MAX(CAST(donate_id AS INTEGER)) FROM donates", nativeQuery = true)
    Integer findMaxDonateId();
}
