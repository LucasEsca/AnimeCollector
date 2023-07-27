import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Anime } from '../model/anime';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {
  animeURL = 'http://localhost:8080/anime/'

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Anime[]>{
    return this.httpClient.get<Anime[]>(this.animeURL + 'list');
  }

  public detail(id: number): Observable<Anime>{
    return this.httpClient.get<Anime>(this.animeURL + `detail/${id}`);
  } 

  public save(anime: Anime): Observable<any>{
    return this.httpClient.post<any>(this.animeURL + 'create', anime);
  }

  public update(id: number, anime: Anime): Observable<any>{
    return this.httpClient.put<any>(this.animeURL + `update/${id}`, anime);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.animeURL + `delete/${id}`);
  }
}
