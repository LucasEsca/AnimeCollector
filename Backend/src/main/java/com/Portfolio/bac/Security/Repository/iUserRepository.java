/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.Portfolio.bac.Security.Repository;

import com.Portfolio.bac.Security.Entity.User;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface iUserRepository extends JpaRepository<User, Integer>  {
        Optional<User> findByUserName (String nuserName);
    
    boolean existsByUserName (String userName);
    boolean existsByEmail (String email);   
}