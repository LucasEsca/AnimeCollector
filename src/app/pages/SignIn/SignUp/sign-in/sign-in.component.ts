import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  template: `<app-auth-form [action]="'singIn'" />`,
  
})
export class SignInComponent {

}
