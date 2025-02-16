package com.frcode.ecom.dao;

import jakarta.persistence.*;

@Entity
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String description;
    private int price;

    @OneToOne
    private Categorie categorie;
}
