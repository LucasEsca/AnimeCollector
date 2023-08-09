import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Anime } from 'src/app/api/model/anime';
import { AnimeService } from 'src/app/api/services/anime.service';


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
  ) { }

  ngOnInit(): void {

  } 

  onUpdate(): void {
  
    }
  

 
}

