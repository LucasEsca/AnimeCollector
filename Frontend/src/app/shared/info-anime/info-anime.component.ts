import { Component, OnInit } from '@angular/core';
import { AnimeImages } from 'src/app/api/model/anime-images';
import { AnimeImagesService } from 'src/app/api/services/anime-images.service';

@Component({
  selector: 'app-info-anime',
  templateUrl: './info-anime.component.html',
  styleUrls: ['./info-anime.component.css']
})
export class InfoAnimeComponent implements OnInit{
  public animeimages!: Array<AnimeImages>;
  public id!: number ;
  

  constructor(
    private _service: AnimeImagesService,
    ) { }


  isLogged = false;

  ngOnInit(): void {
    this.animeimages = this._service.getAnimeImages();
  }


}
