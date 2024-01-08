import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { BodyComponent } from './pages/body/body.component';
import { AuthFormComponent } from './shared/auth-form/auth-form.component';
import { InfoAnimeComponent } from './shared/info-anime/info-anime.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { Err404Component } from './pages/err404/err404.component';
import { LogoComponent } from './shared/logo/logo.component';
import { EditComponent } from './pages/Profile/edit/edit.component';
import { LikedComponent } from './pages/Profile/liked/liked.component';
import { SeeLaterComponent } from './pages/Profile/see-later/see-later.component';
import { HomeComponent } from './pages/home/home.component';
import { ErrorMessageComponent } from './shared/error-message/error-message.component';
import { LoginComponent } from './pages/SignIn-SignUp/login.component';
import { InterceptorService } from './api/services/interceptor.service';
import { EditAnimeComponent } from './shared/edit-anime/edit-anime.component';
import { CreateAnimeComponent } from './shared/create-anime/create-anime.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterPipe } from './pipes/filter.pipe';
import { ModalAnimeComponent } from './shared/modal-anime/modal-anime.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    InfoAnimeComponent,
    NavBarComponent,
    Err404Component,
    LogoComponent,
    EditComponent,
    LikedComponent,
    SeeLaterComponent,
    HomeComponent,
    LoginComponent,
    CreateAnimeComponent,
    FilterPipe,
    EditAnimeComponent,
    ModalAnimeComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthFormComponent,
    ErrorMessageComponent,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(
      {
        timeOut: 10000,
        positionClass: 'toast-top-right',
        preventDuplicates: true,
      }
    ),
  ],
  providers: [
    InterceptorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
