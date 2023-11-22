package com.marcos.condominiomanagement.dto;

import com.marcos.condominiomanagement.model.MoradorModel;
import com.marcos.condominiomanagement.model.VisitanteModel;

import lombok.Data;

@Data
public class VisitanteMoradorDTO {
    private MoradorModel morador;
    private VisitanteModel visitante;
}
