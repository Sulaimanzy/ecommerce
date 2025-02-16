package com.frcode.ecom.dao;

import jakarta.persistence.*;
import org.hibernate.annotations.Check;

@Entity
@Check(constraints = "note BETWEEN 1 AND 5")
public class Avis {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private int note;
    private String text;
    @OneToOne
    private Product product;

    @OneToOne
    private Utilisateur utilisateur;

}
