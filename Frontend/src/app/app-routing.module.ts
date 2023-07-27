import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Err404Component } from './pages/err404/err404.component';
import { HomeComponent } from './pages/home/home.component';
import { LikedComponent } from './pages/Profile/liked/liked.component';
import { SeeLaterComponent } from './pages/Profile/see-later/see-later.component';
import { EditComponent } from './pages/Profile/edit/edit.component';
import { LoginComponent } from './pages/SignIn-SignUp/login.component';
import { AnimeComponent } from './shared/anime/anime.component';





const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'anime/:id', component: AnimeComponent},
  {path: 'profile', component: EditComponent},
  {path: 'liked', component: LikedComponent},
  {path: 'seelater', component: SeeLaterComponent},
  {path: 'error404', component: Err404Component},

  {path: '**', redirectTo: 'error404'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
