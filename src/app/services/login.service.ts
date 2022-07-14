import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private API = environment.API

  constructor(public _http: HttpClient) { }

  public login(credenciais): Observable<any>{
    return this._http.post<any>(`${this.API}Auth`, credenciais)
  }
  
}
