import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './data/Utils/auth.guard';
import { InfoAnimeComponent } from './presentation/Components/info-anime/info-anime.component';
import { EditComponent } from './presentation/pages/Profile/edit/edit.component';
import { LikedComponent } from './presentation/pages/Profile/liked/liked.component';
import { SeeLaterComponent } from './presentation/pages/Profile/see-later/see-later.component';
import { LoginComponent } from './presentation/pages/SignIn-SignUp/login.component';
import { Err404Component } from './presentation/pages/err404/err404.component';
import { BodyComponent } from './presentation/pages/body/body.component';
import { HomeComponent } from './presentation/pages/home/home.component';
import { CreateUpdateComponent } from './presentation/Components/create-update/create-update.component';





const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: '', component: HomeComponent,
  children: [
    {path: 'home', component: BodyComponent},
    {path: 'login', component: LoginComponent},
    {path: 'infoAnime/:id', component: InfoAnimeComponent},
    {path: 'edit/:id', component: CreateUpdateComponent, },
    {path: 'add', component: CreateUpdateComponent, },
    {path: 'profile', component: EditComponent, },
    {path: 'liked', component: LikedComponent, },
    {path: 'seelater', component: SeeLaterComponent, },
  ]},
  {path: 'error404', component: Err404Component},

  {path: '**', redirectTo: 'error404'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
