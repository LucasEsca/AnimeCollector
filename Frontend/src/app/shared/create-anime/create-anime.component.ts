import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Anime } from 'src/app/api/model/anime';
import { AnimeService } from 'src/app/api/services/anime.service';
import { ImageService } from 'src/app/api/services/image.service';

@Component({
  selector: 'app-create-anime',
  templateUrl: './create-anime.component.html',
  styleUrls: ['./create-anime.component.css']
})
export class CreateAnimeComponent {

  name: string = '';
  description: string = '';
  url: string = '';
  img: string = '';

  constructor(
    private sAnime: AnimeService, 
    private router: Router,) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const anime = new Anime(this.name, this.description, this.url, this.img);
    this.sAnime.save(anime).subscribe(
      data => {
        alert("Anime añadido");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }
}
