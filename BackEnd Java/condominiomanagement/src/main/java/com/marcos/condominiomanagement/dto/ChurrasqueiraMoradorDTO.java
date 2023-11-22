package com.marcos.condominiomanagement.dto;

import com.marcos.condominiomanagement.model.MoradorModel;
import com.marcos.condominiomanagement.model.ChurrasqueiraModel;

import lombok.Data;

@Data
public class ChurrasqueiraMoradorDTO {
    private MoradorModel morador;
    private ChurrasqueiraModel churrasqueira;
}
