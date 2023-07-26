/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.Portfolio.bac.Service;

import com.Portfolio.bac.Entity.Anime;
import com.Portfolio.bac.Repository.RAnime;
import jakarta.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class SAnime {
    
     @Autowired
    RAnime rAnime;
    
        public List<Anime> list(){
        return rAnime.findAll();
    }
    
    public Optional<Anime> getOne(int id){
        return rAnime.findById(id);
    }
    
    public Optional<Anime> getByName(String name){
        return rAnime.findByName(name);
    }
    
    public void save(Anime anime){
        rAnime.save(anime);
    }
    
    public void delete(int id){
        rAnime.deleteById(id);
    }
    
    public boolean existsById(int id){
        return rAnime.existsById(id);
    }
    
    public boolean existsByName(String name){
        return rAnime.existsByName(name);
    }
   
}
