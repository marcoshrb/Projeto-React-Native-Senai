package com.marcos.condominiomanagement.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
@Document("funcionario")
public class Funcionario {
    @Id
    private String id;
    private String name;
    private Float salario;
    private Boolean ativo;
}

