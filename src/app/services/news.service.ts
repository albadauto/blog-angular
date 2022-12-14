import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { INews } from '../models/news.interface';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private apiNewsUrl: string = `${environment.APIURI}/news`
  constructor(private http: HttpClient) { }


  registerNews(formData: any): Observable<INews>{
    return this.http.post<INews>(this.apiNewsUrl, formData);
  }

  getAllNews(): Observable<INews>{
    return this.http.get<INews>(this.apiNewsUrl)
  }

  getNewsById(id: any): Observable<INews>{
    return this.http.get<INews>(`${this.apiNewsUrl}/${id}`)
  }

  deleteNews(id: any): Observable<INews>{
    return this.http.delete<INews>(`${this.apiNewsUrl}/${id}`);
  }

  editNews(form: any, id: number): Observable<INews>{
    return this.http.put<INews>(`${this.apiNewsUrl}/${id}`, form);
  }

}
