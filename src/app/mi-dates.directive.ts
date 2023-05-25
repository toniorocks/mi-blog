import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[calculateDateDifference]'
})
export class MiDatesDirective implements OnInit {

  @Input() date: any;

  constructor(private el: ElementRef) {  } //this.el.nativeElement.style.color = 'yellow';
  
  ngOnInit(): void {
    const today = new Date();
    const targetDate = new Date(this.date);
    const timeDiff = today.getTime() - targetDate.getTime();
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    const weeksDiff = Math.floor(daysDiff / 7);
    const monthsDiff = Math.floor(daysDiff / 30);
    this.el.nativeElement.innerText = `${daysDiff} day(s) ago.`

    console.log('date', targetDate);
  }
}