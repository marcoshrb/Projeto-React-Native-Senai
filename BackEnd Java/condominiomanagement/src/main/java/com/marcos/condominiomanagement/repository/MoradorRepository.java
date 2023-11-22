package com.marcos.condominiomanagement.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.marcos.condominiomanagement.model.MoradorModel;

public interface MoradorRepository extends MongoRepository<MoradorModel, String> {
    @Query("{'name': ?0}")
    List<MoradorModel> findByName(String name);

    @Query("{'cpf': ?0}")
    List<MoradorModel> findByCpf(String cpf);
    
    @Query("{'email': ?0}")
    List<MoradorModel> findByEmail(String email);
}