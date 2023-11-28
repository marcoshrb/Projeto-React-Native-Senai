package com.marcos.condominiomanagement.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.marcos.condominiomanagement.model.MoradorModel;
import com.marcos.condominiomanagement.service.MoradorService;

@RestController
@RequestMapping("/morador")
public class MoradorController {
    @Autowired
    private MoradorService moradorService;

    //get
    
    @GetMapping("")
    public List<MoradorModel> getAllMoradores() {
        List<MoradorModel> listRes = moradorService.findAll();
        return listRes;
    }

    @GetMapping("/name/{name}")
    public List<MoradorModel> getMoradorByName(@PathVariable String name) {
        List<MoradorModel> listRes = moradorService.findByName(name);
        return listRes;
    }

    //post

    @PostMapping("")
    public void newMorador(@RequestBody MoradorModel newMorador) {
        moradorService.save(newMorador);
    }

    //put 

    @PutMapping("/update/{id}")
    public void putMorador(@RequestBody MoradorModel newMorador, @PathVariable String id){
        moradorService.save((String)id, (String) newMorador.getName(), (String) newMorador.getSenha(), (int) newMorador.getNumAp(), (String) newMorador.getNumBlc(), newMorador.getSindico(), newMorador.getTaxaCond());
    }

    //delete 

    @DeleteMapping("/delete/{id}")
    public void deleteUser(@PathVariable String id) {
        moradorService.delete(id);
    }
}
