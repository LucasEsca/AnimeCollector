import { Component } from '@angular/core';
import { Anime } from 'src/app/api/model/anime';
import { AnimeService } from 'src/app/api/services/anime.service';
import { TokenService } from 'src/app/api/services/token.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  anime : Anime [] = [];

  constructor(private aService: AnimeService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    
    this.cargarProyecto();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarProyecto(): void {
    this.aService.lista().subscribe(data => { this.anime = data; })
  }

  delete(id?: number){
    if(id != undefined){
      this.aService.delete(id).subscribe(
        data => {
          this.cargarProyecto();
        }, err => {
          alert("No se pudo borrar el proyecto");
        })
      }
    }

}
