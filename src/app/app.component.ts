import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mi-cv';
  links = [
    { title: 'One', fragment: 'one', route: '/home' },
    { title: 'Two', fragment: 'two', route: '/blog' }
  ];
  isMenuCollapsed = true;
  constructor(public route: ActivatedRoute){}
}
