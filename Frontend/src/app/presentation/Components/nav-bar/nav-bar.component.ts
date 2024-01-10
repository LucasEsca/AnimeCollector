import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/data/Utils/token.service';

@Component({
  standalone: true,
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  imports: [CommonModule],
})
export class NavBarComponent implements OnInit{
  isLoggedIn: boolean = false;
  isAdmin: boolean = false;
  
  constructor(
    private router: Router,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = this.tokenService.getToken() !== '';
    const userInfo = this.tokenService.getUserInfo();
    this.isAdmin = userInfo?.role === 'admin';
  }

  redirectTo(path: string) {
    this.router.navigate([path]);
  }


  onLogOut():void{
    this.tokenService.logOut();
    window.location.reload();
  }
}
