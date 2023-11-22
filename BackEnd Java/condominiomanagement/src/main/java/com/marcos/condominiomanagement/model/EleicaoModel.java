package com.marcos.condominiomanagement.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
@Document("eleicao")
public class EleicaoModel {
    @Id
    private String id;
    private Data data;
    private String vencedor;
    private boolean terminada;
    @DBRef
    private MoradorModel idMorador;
}
