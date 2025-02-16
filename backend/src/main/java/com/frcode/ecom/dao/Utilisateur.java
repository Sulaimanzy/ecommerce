package com.frcode.ecom.dao;

import jakarta.persistence.*;

@Entity
public class Utilisateur {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String username;
    private String password;
    private String email;
    @Enumerated
    private Role role;
    private String address;

    @OneToOne(mappedBy = "utilisateur")
    private Panier panier;

}
