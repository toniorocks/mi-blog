import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '@environments/environment';
import { retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BloggerService {

  constructor(private http:HttpClient) { }
  getAllPosts(){
    let params = new HttpParams().set('key', environment.api_key);
    return this.http.get(`${environment.api_url}${environment.blog_id}/posts`, {params}).pipe(retry(2));
  }
}
