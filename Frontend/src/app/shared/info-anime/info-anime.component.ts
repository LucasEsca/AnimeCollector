import { Component, OnInit } from '@angular/core';
import { Anime } from 'src/app/api/model/anime';
import { AnimeService } from 'src/app/api/services/anime.service';
import { TokenService } from 'src/app/api/services/token.service';

@Component({
  selector: 'app-info-anime',
  templateUrl: './info-anime.component.html',
  styleUrls: ['./info-anime.component.css']
})
export class InfoAnimeComponent implements OnInit{
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


  delete(id?: number){
    if(id != undefined){
      this.sAnime.delete(id).subscribe(
        data => {
          this.cargarAnime();
        }, err => {
          alert("No se pudo borrar el anime");
        })
      }
    }

}
