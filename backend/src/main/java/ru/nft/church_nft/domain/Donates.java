package ru.nft.church_nft.domain;

import jakarta.persistence.*;
import jdk.jfr.Enabled;
import lombok.*;

import java.time.OffsetDateTime;

@Data
@NoArgsConstructor
@Entity
@Table(name = "donates")
@Setter
@Builder
@AllArgsConstructor
public class Donates {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "donate_id")
    private String donateId;

    @Column(name = "payment_id")
    private String paymentId;

    @Column(name = "amount")
    private String amount;

    @Column(name = "currency")
    private String currency;

    @Column(name = "status")
    private String status;

    @Column(name = "created_at")
    private OffsetDateTime created_at;

    @Column(name = "idempotence_key")
    private String idempotence_key;

    @Column(name = "mail")
    private String mail;
}
