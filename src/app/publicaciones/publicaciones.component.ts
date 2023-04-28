import { Component, OnInit } from '@angular/core';
import { Blog } from '@app/_models/blog';
import { Posts } from '@app/_models/posts';
import { BloggerService } from '@app/_services/blogger.service';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.scss']
})
export class PublicacionesComponent implements OnInit {

  blog:Blog | undefined;
  posts:Posts | undefined;
  constructor(private bloggerService: BloggerService) { }

  ngOnInit(): void {
    this.getBlog();
    this.getPosts();
  }

  protected getBlog():void {
    this.bloggerService.getBlog().subscribe(resp => {
      this.blog = resp;
    })
  }

  protected getPosts():void{
    this.bloggerService.getAllPosts().subscribe(resp => {
      this.posts = resp;
    })
  }

}
