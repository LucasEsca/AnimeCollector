import { Component } from '@angular/core';
import { AuthFormComponent } from '../../Components/auth-form/auth-form.component';

@Component({
  selector: 'login',
  standalone:true,
  imports:[AuthFormComponent],
  template: `<app-auth-form />`,
  
})
export class LoginComponent {

}