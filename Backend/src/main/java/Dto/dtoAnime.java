/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Dto;

import jakarta.validation.constraints.NotBlank;
import java.io.File;

/**
 *
 * @author Usuario
 */
public class dtoAnime {
    @NotBlank
    private String name;
    @NotBlank
    private String description;
    @NotBlank
    private File img;

    
    public dtoAnime() {
    }

    public dtoAnime(String name, String description, File img) {
        this.name = name;
        this.description = description;
        this.img = img;
       
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public File getImg() {
        return img;
    }

    public void setImgP(File img) {
        this.img = img;
    }

}
