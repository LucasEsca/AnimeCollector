import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Anime } from 'src/app/api/model/anime';
import { AnimeService } from 'src/app/api/services/anime.service';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.css']
})
export class AnimeComponent {
  anime: Anime = new Anime('', '', null);

  constructor(private aService: AnimeService,private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.aService.detail(id).subscribe(
      data =>{
        this.anime = data;
      },err =>{
        alert("Error al modificar proyecto");
        this.router.navigate(['']);
      });
}

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.aService.update(id, this.anime).subscribe(
        data => {
          this.router.navigate(['']);
    }, err =>{
      alert("Error al modificar anime");
      this.router.navigate(['']);
   });
}

onFileSelected(event: Event): void {
  const inputElement = event.target as HTMLInputElement;
  if (inputElement.files && inputElement.files.length > 0) {
    const file = inputElement.files[0];
    this.anime.img = file;
  }
}

}
