import { Component } from '@angular/core';
import { AnimeImages } from 'src/app/data/api/interfaces/anime-images';
import { AnimeImagesService } from 'src/app/data/api/services/anime-images.service';

@Component({
  selector: 'app-liked',
  templateUrl: './liked.component.html',
  styleUrls: ['./liked.component.css']
})
export class LikedComponent {
  public animeimages!: Array<AnimeImages>;
  public page!:number;
  

  constructor(
    private _service: AnimeImagesService,
    ) { }


  isLogged = false;

  ngOnInit(): void {
    this.animeimages = this._service.getAnimeImages();
   
  }
}
