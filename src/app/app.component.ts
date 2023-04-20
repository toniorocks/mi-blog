import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Posts } from '@app/_models/posts';
import { BloggerService } from '@app/_services/blogger.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'mi-cv';
  isMenuCollapsed = true;
  posts:Posts | undefined;
  currentYear: number = new Date().getFullYear();

  constructor(public route: ActivatedRoute, private bloggerService:BloggerService){}

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    this.bloggerService.getAllPosts().subscribe((posts:any) => {
      this.posts = posts;
    })
  }

}
