package com.frcode.ecom.dao;

import jakarta.persistence.*;

import java.util.Set;

@Entity
public class Panier {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @OneToOne
    private Utilisateur utilisateur;

    @OneToMany
    private Set<Product> products;

}
