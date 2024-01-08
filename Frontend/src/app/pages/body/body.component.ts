import { Component, OnInit } from '@angular/core';
import { Anime } from 'src/app/api/model/anime';
import { AnimeImages } from 'src/app/api/model/anime-images';
import { AnimeImagesService } from 'src/app/api/services/anime-images.service';
import { AnimeService } from 'src/app/api/services/anime.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit{
  public animeimages!: Array<AnimeImages>;
  listAnime: Anime[] = []
  public page!:number;
  

  constructor(
    private _service: AnimeService,
    ) { }


  isLogged = false;

  ngOnInit(): void {
    this.getAnimes();
  }

  getAnimes() {
    this._service.getAnimes().subscribe(data => {
      this.listAnime = data;
    })
  }

  
}