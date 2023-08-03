import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Anime } from 'src/app/api/model/anime';
import { AnimeService } from 'src/app/api/services/anime.service';
import { ImageService } from 'src/app/api/services/image.service';


@Component({
  selector: 'app-edit-anime',
  templateUrl: './edit-anime.component.html',
  styleUrls: ['./edit-anime.component.css']
})
export class EditAnimeComponent implements OnInit {
  
  anime: Anime = null!;

  constructor(
    private sAnime: AnimeService,
    private activatedRouter: ActivatedRoute,
    private router: Router,
    public imageService: ImageService
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sAnime.detail(id).subscribe(
      data =>{
        this.anime = data;
      }, err =>{
         alert("Error al modificar");
         this.router.navigate(['']);
      }
    )
  } 

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.anime.img = this.imageService.url
    this.sAnime.update(id, this.anime).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar");
        this.router.navigate(['']);
      })
    }
  

  uploadImage($event: any) {
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "anime_" + id;
    this.imageService.uploadImage($event, name)
  }
}

