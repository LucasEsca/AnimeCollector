import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AnimeImages } from 'src/app/api/model/anime-images';
import { AnimeImagesService } from 'src/app/api/services/anime-images.service';

@Component({
  selector: 'app-modal-anime',
  templateUrl: './modal-anime.component.html',
  styleUrls: ['./modal-anime.component.css']
})
export class ModalAnimeComponent {
  public animeimages!: Array<AnimeImages>;
  public page!:number;
  

  constructor(
    private _service: AnimeImagesService,
    ) { }


  isLogged = false;

  ngOnInit(): void {
    this.animeimages = this._service.getAnimeImages();
   
  }

  @Input() data: any;
  @Output() closeModal = new EventEmitter();

  onCloseModal(): void {
    this.closeModal.emit();
  }
}
