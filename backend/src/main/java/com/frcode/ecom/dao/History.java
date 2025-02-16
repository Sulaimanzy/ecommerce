package com.frcode.ecom.dao;

import jakarta.persistence.*;

import java.util.Date;

@Entity
public class History {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private Date date_achat;
    @OneToMany
    private Product product;
    @OneToOne
    private Utilisateur utilisateur;
}
