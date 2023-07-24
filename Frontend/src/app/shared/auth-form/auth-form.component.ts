import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { ErrorMessageComponent } from '../error-message/error-message.component';


  const actionType = {
    singIn:{
      action: 'singIn',
      title: 'Sign In',
    },
    singUp: {
      action: 'singUp',
      title: 'Sign Up',
    },
  }as const;
  
  type ActionType = keyof typeof actionType;
  
  @Component({
      selector: 'app-auth-form',
      standalone: true,
      templateUrl: './auth-form.component.html',
      styleUrls: ['./auth-form.component.css'],
      imports: [CommonModule, RouterModule, ReactiveFormsModule, ErrorMessageComponent]
  })
  export class AuthFormComponent implements OnInit {
    @Input() action!: ActionType;
    form!: FormGroup;
    title!: string;
  
    user$!: Observable<any>;
  
    
  
    private readonly fb = inject(FormBuilder);
    private readonly emailPattern =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
    ngOnInit(): void {
      this.title =
        this.action === actionType.singIn.action
          ? actionType.singIn.title
          : actionType.singUp.title;
  
      this.initForm();
  
      
    }
  
    onSubmit(): void {
      
    }
  
    hasError(field: string): boolean {
      const fieldName = this.form.get(field);
      return !!fieldName?.invalid && fieldName.touched;
    }

  
    private initForm(): void {
      this.form = this.fb.group({
        email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
        password: ['', [Validators.required, Validators.minLength(5)]],
      });
    }
  }

