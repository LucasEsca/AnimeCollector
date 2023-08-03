/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.Portfolio.bac.Dto;

import jakarta.validation.constraints.NotBlank;

public class dtoAnime {
    @NotBlank
    private String name;
    @NotBlank
    private String description;
    @NotBlank
    private String url;
    @NotBlank
    private String img;

    public dtoAnime(String name, String description, String url, String img) {
        this.name = name;
        this.description = description;
        this.url = url;
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

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }

    
}
