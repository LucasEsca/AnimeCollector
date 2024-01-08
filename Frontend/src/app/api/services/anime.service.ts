import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Anime } from '../model/anime';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/products'
  }

  getAnimes(): Observable<Anime[]> {
    return this.http.get<Anime[]>(`${this.myAppUrl}${this.myApiUrl}`)
  }
}
