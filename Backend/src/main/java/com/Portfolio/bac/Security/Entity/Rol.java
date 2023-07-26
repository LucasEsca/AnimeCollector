
package com.Portfolio.bac.Security.Entity;

import com.Portfolio.bac.Security.Enum.NameRol;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotNull;



@Entity
public class Rol {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @NotNull
    @Enumerated(EnumType.STRING)
    private NameRol rolName;
    
    //constructor

    public Rol() {
    }

    public Rol(NameRol rolName) {
        this.rolName = rolName;
        
    //Getter y Setters
    
    
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public NameRol getRolName() {
        return rolName;
    }

    public void setRolName(NameRol rolName) {
        this.rolName = rolName;
    }
    
    
    
}