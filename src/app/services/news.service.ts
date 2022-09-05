import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { INews } from '../models/news.interface';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private apiNewsUrl: string = `${environment.APIURI}/registernews`
  constructor(private http: HttpClient) { }


  registerNews(formData: any): Observable<INews>{
    return this.http.post<INews>(this.apiNewsUrl, formData);
  }

}
