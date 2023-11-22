package com.marcos.condominiomanagement.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
@Document("assembleias")
public class AssembleiasModel {
    @Id
    private String id;
    private Data data;
    private String idMorador;
}
