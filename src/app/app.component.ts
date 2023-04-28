import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Posts } from '@app/_models/posts';
import { BloggerService } from '@app/_services/blogger.service';
import { Blog } from './_models/blog';
import { Item } from './_models/item';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'mi-cv';
  isMenuCollapsed = true;
  posts:Posts | undefined;
  lastPosts:Item[] | undefined = []
  currentYear: number = new Date().getFullYear();
  blog:Blog | undefined;

  constructor(public route: ActivatedRoute, private bloggerService:BloggerService){}

  ngOnInit(): void {
    this.getBlog();
    this.getPosts();
  }

  protected getBlog():void{
    this.bloggerService.getBlog().subscribe((blog:Blog) => {
      this.blog = blog;
    })
  }

  protected getPosts():void{
    this.bloggerService.getAllPosts().subscribe((posts:any) => {
      this.posts = posts;
      this.lastPosts = this.posts?.items?.slice(0, 3)
    })
  }

}
