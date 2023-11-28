package com.marcos.condominiomanagement.dto;

import com.marcos.condominiomanagement.model.MoradorModel;
import com.marcos.condominiomanagement.model.EleicaoModel;

import lombok.Data;

@Data
public class EleicaoMoradorDTO {
    private MoradorModel morador;
    private EleicaoModel eleicao;
}
