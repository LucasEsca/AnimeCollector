import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Anime } from 'src/app/data/api/interfaces/anime';
import { AnimeService } from 'src/app/data/api/services/anime.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  anime :Anime [] = [];
  loading: boolean = false;
  public page!:number;

  constructor(private _service: AnimeService, private toastr: ToastrService) {
   }

  ngOnInit(): void {
    this._service.getListAnimes().subscribe(
      (data) => {
        this.anime = data;
      },
      (error) => {
        console.error('Error fetching anime list:', error);
        // Puedes manejar el error según tus necesidades
      }
    );
  }
}