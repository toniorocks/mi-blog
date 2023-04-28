import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Observable, retry } from 'rxjs';
import { Blog } from '@app/_models/blog';

@Injectable({
  providedIn: 'root'
})
export class BloggerService {

  constructor(private http:HttpClient) { }
  getAllPosts():Observable<any>{
    let params = new HttpParams().set('key', environment.api_key);
    return this.http.get(`${environment.api_url}${environment.blog_id}/posts`, {params}).pipe(retry(2));
  }
  getBlog():Observable<any>{
    let params = new HttpParams().set('key', environment.api_key);
    return this.http.get(`${environment.api_url}${environment.blog_id}`, {params}).pipe(retry(2));
  }
  getPost(postId:string):Observable<any>{
    let params = new HttpParams()
    .set('key', environment.api_key)
    return this.http.get(`${environment.api_url}${environment.blog_id}/posts/${postId}`, {params}).pipe(retry(2));
  }
}
