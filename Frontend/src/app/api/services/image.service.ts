import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { AnimeUrl } from './animeurl';
import { Observable } from 'rxjs';
import { Anime } from '../model/anime';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
 public url: string;

  constructor(private _http:HttpClient) { 
    this.url = AnimeUrl.urlConnection;
  }


  uploadFile(File: any): Observable<any> {
    var peticion = "api/Subir/";
    var json = JSON.stringify(File);
    console.log(File);
    var headers = new HttpHeaders().set("Content-Type", "application/json");
    return this._http.post(this.url + peticion, File, { headers });
  }

  getUploads(): Observable<any> {
    var peticion = "api/ImagenesSubidas";
    return this._http.get(this.url + peticion);
  }
}
