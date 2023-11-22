package com.marcos.condominiomanagement.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
@Document("visitante")
public class VisitanteModel {
    @Id
    private String id;
    private String name;
    private Data data;
    @DBRef
    private MoradorModel idMorador;
}
