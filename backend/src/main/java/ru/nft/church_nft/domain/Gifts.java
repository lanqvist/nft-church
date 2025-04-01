package ru.nft.church_nft.domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity
@Table(name = "gifts")
@Builder
@AllArgsConstructor
public class Gifts {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "type")
    private String type;

    @Column(name = "address")
    private String address;

    @ManyToOne
    @JoinColumn(name = "donates_id")
    private Donates donates;
}
