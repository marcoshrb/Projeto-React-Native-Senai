package com.marcos.condominiomanagement.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
@Document("financeiro")
public class FinanceiroModel {
    @Id
    private String id;
    private int mes;
    private float valor;
    private String descricao;
}
