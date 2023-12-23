import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { BloggerService } from '../blogger.service';


@Injectable({
  providedIn: 'root'
})
export class ResolverService implements Resolve<any> {
  //this resolver is not yet implemented
  constructor(private bloggerService:BloggerService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.bloggerService.getAllPosts();
  }
}
