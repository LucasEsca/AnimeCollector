import { Component, OnInit } from '@angular/core';
import { AnimeImages } from 'src/app/api/model/anime-images';
import { AnimeImagesService } from 'src/app/api/services/anime-images.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit{
  public animeimages!: Array<AnimeImages>;
  public page!:number;
  

  constructor(
    private _service: AnimeImagesService,
    ) { }


  isLogged = false;

  ngOnInit(): void {
    this.animeimages = this._service.getAnimeImages();
   
  }
  data = [];
  selectedItem = null;

  setSelectedItem(item: null) {
    this.selectedItem = item;
  }
  
}