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


import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { EditAnimeComponent } from './shared/edit-anime/edit-anime.component';
import { CreateAnimeComponent } from './shared/create-anime/create-anime.component';



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
    EditAnimeComponent,
    InfoAnimeComponent,
    CreateAnimeComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthFormComponent,
    ErrorMessageComponent,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage()),
  ],
  providers: [
    InterceptorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
