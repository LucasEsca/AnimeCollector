import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ErrorMessageComponent } from '../error-message/error-message.component';
import { UserService } from 'src/app/api/services/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from 'src/app/api/model/user';
import { ErrorService } from 'src/app/api/services/error.service';
import { ToastrService } from 'ngx-toastr';
import { SpinnerComponent } from '../spinner/spinner.component';

  
 
  
  @Component({
      selector: 'app-auth-form',
      standalone: true,
      templateUrl: './auth-form.component.html',
      styleUrls: ['./auth-form.component.css'],
      imports: [CommonModule, RouterModule, ReactiveFormsModule, ErrorMessageComponent, FormsModule, SpinnerComponent]
  })
  export class AuthFormComponent implements OnInit {
    username: string = '';
    password: string = '';
    confirmPassword: string = '';
    loading: boolean = false;
  
    constructor(private toastr: ToastrService,
      private _userService: UserService,
      private router: Router,
      private _errorService: ErrorService) { }
  
    ngOnInit(): void {
    }
  
    addUser() {
  
      // Validamos que el usuario ingrese valores
      if (this.username == '' || this.password == '' || this.confirmPassword == '') {
        this.toastr.error('Todos los campos son obligatorios', 'Error');
        return;
      }
  
      // Validamos que las password sean iguales
      if (this.password != this.confirmPassword) {
        this.toastr.error('Las passwords ingresadas son distintas', 'Error');
        return;
      }
  
      // Creamos el objeto
      const user: User = {
        username: this.username,
        password: this.password
      }
  
      this.loading = true;
      this._userService.signIn(user).subscribe({
        next: (v) => {
          this.loading = false;
          this.toastr.success(`El usuario ${this.username} fue registrado con exito`, 'Usuario registrado');
          this.router.navigate(['/login']);
        },
        error: (e: HttpErrorResponse) => {
          this.loading = false;
          this._errorService.msjError(e);
        }
      })
    }

    login() {

      // Validamos que el usuario ingrese datos
      if (this.username == '' || this.password == '') {
        this.toastr.error('Todos los campos son obligatorios', 'Error');
        return
      }
  
      // Creamos el body
      const user: User = {
        username: this.username,
        password: this.password
      }
  
      this.loading = true;
      this._userService.login(user).subscribe({
        next: (token) => {
          localStorage.setItem('token', token);
          this.router.navigate(['/dashboard'])
        },
        error: (e: HttpErrorResponse) => {
          this._errorService.msjError(e);
          this.loading = false
        }
      })
    }
  }