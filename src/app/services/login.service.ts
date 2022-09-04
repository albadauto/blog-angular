import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment';
import { ILogin } from '../models/login.interface';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loginApiUrl: string = `${environment.APIURI}/verifylogin`;
  constructor(private http: HttpClient) { }

  public verifyLogin(formData: any): Observable<ILogin>{
    return this.http.post<ILogin>(this.loginApiUrl, formData);
  }
}
