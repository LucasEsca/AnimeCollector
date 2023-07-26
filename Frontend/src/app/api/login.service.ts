import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDto } from './model/jwt-dto';
import { NewUser } from './model/new-user';
import { LoginUser } from './model/login-user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  authURL = 'http://localhost:8080/auth/'

  constructor(private httpClient: HttpClient) { }

  public new(newUser: NewUser): Observable<any>{
    return this.httpClient.post<any>(this.authURL + 'nuevo', newUser);
  }

  public login(loginUser: LoginUser):Observable<JwtDto>{
    return this.httpClient.post<JwtDto>(this.authURL + 'login', loginUser)
  }
}
