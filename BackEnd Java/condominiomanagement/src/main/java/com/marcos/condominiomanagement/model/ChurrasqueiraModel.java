package com.marcos.condominiomanagement.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
@Document("churrasqueira")
public class ChurrasqueiraModel {
    @Id
    private String id;
    private String nome;
    private Data data;
    private String idMorador;
}
