import { Component, OnInit } from '@angular/core';
import { Anime } from 'src/app/api/model/anime';
import { AnimeService } from 'src/app/api/services/anime.service';
import { TokenService } from 'src/app/api/services/token.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit{
  public page!:number;
  anime : Anime [] = [];
  

  constructor(private sAnime: AnimeService, 
    private tokenService: TokenService,
    ) { }


  isLogged = false;

  ngOnInit(): void {
    this.cargarAnime();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarAnime(): void{
    this.sAnime.lista().subscribe(
      data =>{
        this.anime = data;
      }
    )
  }
}