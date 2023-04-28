import { Component, OnInit } from '@angular/core';
import { BloggerService } from '@app/_services/blogger.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.scss']
})
export class PublicacionComponent implements OnInit {

  constructor(private bloggerService: BloggerService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const postId = params['postId'];
      this.getPost(postId)
    });
  }

  protected getPost(postId:string){
    this.bloggerService.getPost(postId).subscribe(resp => {
      console.log('resp',resp)
    })
  }

}
