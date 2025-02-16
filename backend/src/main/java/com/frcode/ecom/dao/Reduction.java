package com.frcode.ecom.dao;

import jakarta.persistence.*;

@Entity
public class Reduction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private double value;
    @OneToOne
    private Product product;

}
