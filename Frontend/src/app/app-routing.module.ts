import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './data/Utils/auth.guard';
import { CreateAnimeComponent } from './presentation/Components/create-anime/create-anime.component';
import { EditAnimeComponent } from './presentation/Components/edit-anime/edit-anime.component';
import { InfoAnimeComponent } from './presentation/Components/info-anime/info-anime.component';
import { EditComponent } from './presentation/pages/Profile/edit/edit.component';
import { LikedComponent } from './presentation/pages/Profile/liked/liked.component';
import { SeeLaterComponent } from './presentation/pages/Profile/see-later/see-later.component';
import { LoginComponent } from './presentation/pages/SignIn-SignUp/login.component';
import { Err404Component } from './presentation/pages/err404/err404.component';
import { BodyComponent } from './presentation/pages/body/body.component';
import { HomeComponent } from './presentation/pages/home/home.component';





const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: '', component: HomeComponent,
  children: [
    {path: 'home', component: BodyComponent},
    {path: 'login', component: LoginComponent},
    {path: 'infoAnime', component: InfoAnimeComponent},
    {path: 'editAnime', component: EditAnimeComponent, canActivate: [AuthGuard]},
    {path: 'createAnime', component: CreateAnimeComponent, canActivate: [AuthGuard]},
    {path: 'profile', component: EditComponent, canActivate: [AuthGuard]},
    {path: 'liked', component: LikedComponent, canActivate: [AuthGuard]},
    {path: 'seelater', component: SeeLaterComponent, canActivate: [AuthGuard]},
  ]},
  {path: 'error404', component: Err404Component},

  {path: '**', redirectTo: 'error404'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
