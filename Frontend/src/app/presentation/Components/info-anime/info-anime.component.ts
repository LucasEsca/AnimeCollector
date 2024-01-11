import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Anime } from 'src/app/data/api/interfaces/anime';
import { AnimeService } from 'src/app/data/api/services/anime.service';

@Component({
  selector: 'app-info-anime',
  templateUrl: './info-anime.component.html',
  styleUrls: ['./info-anime.component.css']
})
export class InfoAnimeComponent implements OnInit{
  animeId: number | undefined;
  animeDetail: Anime | undefined;
  safeTrailerUrl: SafeResourceUrl | undefined;
  

  constructor(
    private _service: AnimeService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.animeId = +params['id'];
      this.loadAnimeDetail();
    });
  }

  loadAnimeDetail() {
    if (this.animeId) {
      this._service.getAnime(this.animeId).subscribe(anime => {
        this.animeDetail = anime;
        if (this.animeDetail && this.animeDetail.url) {
          this.safeTrailerUrl = this.generateYouTubeUrl(this.animeDetail.url);
        }
      });
    }
  }

  generateYouTubeUrl(videoId: string): SafeResourceUrl {
    const url = `https://www.youtube.com/embed/${videoId}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
