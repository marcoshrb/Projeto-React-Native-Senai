package com.marcos.condominiomanagement.dto;

import com.marcos.condominiomanagement.model.MoradorModel;
import com.marcos.condominiomanagement.model.ApartamentoModel;

import lombok.Data;

@Data
public class ApartamentoMoradorDTO {
    private MoradorModel morador;
    private ApartamentoModel apartamento;
}