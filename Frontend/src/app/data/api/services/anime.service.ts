import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Anime } from '../interfaces/anime';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/anime'
  }

  getListAnimes(): Observable<Anime[]> {
    return this.http.get<Anime[]>(`${this.myAppUrl}${this.myApiUrl}`);
   }
 
   deleteAnime(id: number): Observable<void> {
     return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`)
   }
 
   saveAnime(anime: Anime): Observable<void> {
     return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}`,anime)
   }
 
   getAnime(id: number): Observable<Anime> {
     return this.http.get<Anime>(`${this.myAppUrl}${this.myApiUrl}${id}`)
   }
 
   updateAnime(id: number, anime: Anime): Observable<void> {
     return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}${id}`, anime);
   }
}
