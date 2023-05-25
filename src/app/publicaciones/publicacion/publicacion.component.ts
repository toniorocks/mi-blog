import { Component, OnInit } from '@angular/core';
import { BloggerService } from '@app/_services/blogger.service';
import { ActivatedRoute } from '@angular/router';
import { Item } from '@app/_models/item';

import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.scss']
})
export class PublicacionComponent implements OnInit {

  post:Item | undefined = undefined;
  htmlContent:any;

  constructor(private bloggerService: BloggerService, private route: ActivatedRoute, private domSanitazer:DomSanitizer) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const postId = params['postId'];
      this.getPost(postId)
    });
  }

  protected getPost(postId:string){
    this.bloggerService.getPost(postId).subscribe(resp => {
      this.post = resp;
      this.htmlContent = this.post?.content;
      this.htmlContent = this.domSanitazer.bypassSecurityTrustHtml(this.htmlContent);
    })
  }

}
