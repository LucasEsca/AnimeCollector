import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Anime } from 'src/app/api/model/anime';
import { TokenService } from 'src/app/api/services/token.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  filterpost = '';
  posts = Anime;
  isLogged= false;

  constructor(private router: Router, private tokenService: TokenService) {}

  ngOnInit(): void {
  if(this.tokenService.getToken()){
    this.isLogged=true;
  }else{
    this.isLogged=false;
  }
}

onLogOut():void{
  this.tokenService.logOut();
  window.location.reload();
}

enter(){
  this.router.navigate(['/login'])
}
}
