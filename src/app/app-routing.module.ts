import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Err404Component } from './pages/err404/err404.component';
import { HomeComponent } from './pages/home/home.component';
import { LikedComponent } from './pages/Profile/liked/liked.component';
import { SeeLaterComponent } from './pages/Profile/see-later/see-later.component';
import { EditComponent } from './pages/Profile/edit/edit.component';
import { SignUpComponent } from './pages/SignIn/SignUp/sign-up/sign-up.component';
import { SignInComponent } from './pages/SignIn/SignUp/sign-in/sign-in.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'signin', component: SignInComponent},
  {path: 'signup', component: SignUpComponent},
  {path: 'error404', component: Err404Component},
  {path: 'profile', component: EditComponent},
  {path: 'liked', component: LikedComponent},
  {path: 'seelater', component: SeeLaterComponent},

  {path: '**', redirectTo: 'error404'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
