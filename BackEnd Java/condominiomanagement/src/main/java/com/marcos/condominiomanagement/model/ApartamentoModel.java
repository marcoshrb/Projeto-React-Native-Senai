package com.marcos.condominiomanagement.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
@Document("apartamento")
public class ApartamentoModel {
    @Id
    private String id;
    private int numVaga;
    @DBRef
    private MoradorModel idMorador;
}
