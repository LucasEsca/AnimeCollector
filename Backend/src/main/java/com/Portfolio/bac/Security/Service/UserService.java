/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.Portfolio.bac.Security.Service;

import com.Portfolio.bac.Security.Entity.User;
import com.Portfolio.bac.Security.Repository.iUserRepository;;
import jakarta.transaction.Transactional;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class UserService {
         @Autowired
    iUserRepository iusuarioRepository;
            
    public Optional<User> getByUserName(String userName){
        return iusuarioRepository.findByUserName(userName);
    }
    
    public boolean existByUserName(String userName){
        return iusuarioRepository.existsByUserName(userName);
    }
    
    public boolean existByEmail(String email){
        return iusuarioRepository.existsByEmail(email);
    }
    
    public void save(User user){
        iusuarioRepository.save(user);
    }
}
