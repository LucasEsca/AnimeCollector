import { Component } from '@angular/core';
import { AnimeImages } from 'src/app/data/api/interfaces/anime-images';
import { AnimeImagesService } from 'src/app/data/api/services/anime-images.service';

@Component({
  selector: 'app-see-later',
  templateUrl: './see-later.component.html',
  styleUrls: ['./see-later.component.css']
})
export class SeeLaterComponent {
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
