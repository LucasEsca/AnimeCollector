import { Injectable } from '@angular/core';


const TOKEN_KEY = 'AuthToken';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }
  
  public setToken(token: string): void {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return localStorage.getItem(TOKEN_KEY) || '';
  }

  public getUserInfo(): { username: string; role: string } | null {
    const token = this.getToken();
    
    if (token) {
      try {
        const payload = this.parseJwt(token);
        return { username: payload.sub, role: payload.role };
      } catch (error) {
        console.error('Error al decodificar el token', error);
        return null;
      }
    }
  
    return null;
  }

  private parseJwt(token: string): any {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)).join(''));
    return JSON.parse(jsonPayload);
  }

  public logOut(): void {
    localStorage.clear();
  }
}
