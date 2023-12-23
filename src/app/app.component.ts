import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Posts } from '@app/_models/posts';
import { BloggerService } from '@app/_services/blogger.service';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from './app.reducer';
import { Blog } from './_models/blog';
import { Item } from './_models/item';
import { LoadingService } from './_services/loading.service';
import { setItems, unSetItems } from './_store/post.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'mi-cv';
  isMenuCollapsed = true;
  posts:Posts | undefined;
  lastPosts:Item[] | undefined = []
  currentYear: number = new Date().getFullYear();
  blog:Blog | undefined;
  targetDate: any;
  loading:boolean = false;
  uiSubscription: Subscription | undefined;
  postsSubscription: Subscription | undefined;

  constructor(
    public route: ActivatedRoute, 
    private bloggerService:BloggerService, 
    private store:Store<AppState>, 
    private loadingService:LoadingService 
  ){}
  
  ngOnDestroy(): void {
    this.uiSubscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.getBlog();
    this.getPosts();
    //this.simulateLoading();
    this.uiSubscription = this.store.select('ui').subscribe(ui => {
      this.loading = ui.isLoading;
      this.loadingService.setLoadingState(this.loading);
    });
  }

  getFirstWords(htmlContent?:string): string | undefined{
    if(!htmlContent) return undefined;
    const div = document.createElement('div');
    div.innerHTML = htmlContent;
    const text:string = div.textContent || div.innerText || '';
    const words:any = text.trim().split(/\s+/);
    return words.slice(0, 8).join(' ');
  }

  protected getBlog():void{
    this.bloggerService.getBlog().subscribe((blog:Blog) => {
      this.blog = blog;
    })
  }

  protected getPosts():void{
    this.bloggerService.getAllPosts().subscribe((posts:Posts) => {
      this.store.dispatch(setItems(posts));
      this.posts = posts;
      this.lastPosts = this.posts?.items?.slice(0, 3)
    })
  }

  /*  dont delete this code
      use this method to simulate loading

  protected simulateLoading():void{

    // Set loading state to true before making an API call
    this.loadingService.setLoadingState(true);

    // Simulate an API call
    setTimeout(() => {
      // Set loading state to false when the operation is complete
      this.loadingService.setLoadingState(false);
    }, 2000);

  } 
  
  */

}
