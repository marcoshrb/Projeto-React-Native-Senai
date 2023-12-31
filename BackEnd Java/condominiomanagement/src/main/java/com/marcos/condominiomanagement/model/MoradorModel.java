package com.marcos.condominiomanagement.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
@Document("morador")
public class MoradorModel {
    @Id
    private String id;
    private String name;
    private String senha;
    private int numAp;
    private String numBlc;
    private Boolean sindico;
    private Boolean taxaCond;
    

    public MoradorModel(){}
}
