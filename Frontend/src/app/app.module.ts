import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterPipe } from './data/pipes/filter.pipe';
import { AuthFormComponent } from './presentation/Components/auth-form/auth-form.component';
import { CreateAnimeComponent } from './presentation/Components/create-anime/create-anime.component';
import { EditAnimeComponent } from './presentation/Components/edit-anime/edit-anime.component';
import { InfoAnimeComponent } from './presentation/Components/info-anime/info-anime.component';
import { EditComponent } from './presentation/pages/Profile/edit/edit.component';
import { LikedComponent } from './presentation/pages/Profile/liked/liked.component';
import { SeeLaterComponent } from './presentation/pages/Profile/see-later/see-later.component';
import { BodyComponent } from './presentation/pages/body/body.component';
import { Err404Component } from './presentation/pages/err404/err404.component';
import { FooterComponent } from './presentation/pages/footer/footer.component';
import { HeaderComponent } from './presentation/pages/header/header.component';
import { HomeComponent } from './presentation/pages/home/home.component';
import { ErrorMessageComponent } from './presentation/shared/error-message/error-message.component';
import { LoginComponent } from './presentation/pages/SignIn-SignUp/login.component';
import { LogoComponent } from './presentation/shared/logo/logo.component';
import { NavBarComponent } from './presentation/Components/nav-bar/nav-bar.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    InfoAnimeComponent,
    Err404Component,
    EditComponent,
    LikedComponent,
    SeeLaterComponent,
    HomeComponent,
    CreateAnimeComponent,
    FilterPipe,
    EditAnimeComponent,
    
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    AuthFormComponent,
    ErrorMessageComponent,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    LoginComponent,
    LogoComponent,
    NavBarComponent,
    ToastrModule.forRoot(
      {
        timeOut: 10000,
        positionClass: 'toast-top-right',
        preventDuplicates: true,
      }
    ),
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
