import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    AuthFormComponent,
    InfoAnimeComponent,
    NavBarComponent,
    Err404Component,
    LogoComponent,
    EditComponent,
    LikedComponent,
    SeeLaterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
