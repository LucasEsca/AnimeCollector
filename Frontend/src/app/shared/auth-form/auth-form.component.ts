import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ErrorMessageComponent } from '../error-message/error-message.component';
import { LoginService } from 'src/app/api/services/login.service';
import { LoginUser } from 'src/app/api/model/login-user';
import { TokenService } from 'src/app/api/services/token.service';
import { NewUser } from 'src/app/api/model/new-user';

  
 
  
  @Component({
      selector: 'app-auth-form',
      standalone: true,
      templateUrl: './auth-form.component.html',
      styleUrls: ['./auth-form.component.css'],
      imports: [CommonModule, RouterModule, ReactiveFormsModule, ErrorMessageComponent, FormsModule]
  })
  export class AuthFormComponent implements OnInit {
    isLogged=false;
    isLogginFail=false;
    loginUser!: LoginUser;
    userName!: string;
    password! :string;
    roles:string[]=[];
    errMsj!:string;

    name!: string;
    email!: string;
  
  
  
    constructor(private tokenService: TokenService, private loginService: LoginService,private router: Router){}
    ngOnInit(): void {
      if(this.tokenService.getToken()){
        this.isLogged = true;
        this.isLogginFail = false;
        this.roles = this.tokenService.getAuthorities();
      }
    }
  
    onLogin(): void{
      this.loginUser = new LoginUser(this.userName, this.password); 
      this.loginService.login(this.loginUser).subscribe(data =>{
          this.isLogged = true;
          this.isLogginFail = false;
          this.tokenService.setToken(data.token);
          this.tokenService.setUserName(data.nombreUsuario);
          this.tokenService.setAuthorities(data.authorities);
          this.roles = data.authorities;
          this.router.navigate([''])
        }, err =>{
          this.isLogged = false;
          this.isLogginFail = true;
          this.errMsj = err.error.mensaje;
          console.log(this.errMsj);
          
        })
    }

    onSingUp(): void{
      const newUser = new NewUser(this.name, this.userName, this.email, this.password);
      this.loginService.new(newUser).subscribe(
        data =>{
          alert("Usuario creado correctamente");
          this.router.navigate(['']);
        }, err =>{
          alert("falló");
          this.router.navigate(['']);
        }
      )
    }
  }