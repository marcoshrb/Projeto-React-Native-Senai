package com.marcos.condominiomanagement.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.marcos.condominiomanagement.model.MoradorModel;
import com.marcos.condominiomanagement.repository.MoradorRepository;

@Service
public class MoradorService {

    @Autowired
    private MoradorRepository moradorRepository;

    public MoradorModel save(MoradorModel moradorModel){
        return this.moradorRepository.save(moradorModel);
    }

    public void save(String id, String name, int numAp, int numBlc, boolean sindico, boolean taxaCond){
        this.moradorRepository.save(new MoradorModel(id, name, numAp, numBlc, sindico, taxaCond));
    }

    public List<MoradorModel> findAll(){
        return (List<MoradorModel>) this.moradorRepository.findAll();
    }

    public List<MoradorModel> findByName(String name){
        return (List<MoradorModel>) this.moradorRepository.findByName(name);
    }

    public void delete(String id){
        this.moradorRepository.deleteById(id);
    }
}
