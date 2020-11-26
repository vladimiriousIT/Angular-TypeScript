import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { HighlightDirective } from './shared/highlight.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'forms-app';
  @ViewChild('paragraphHilight', {static: false}) pDirective: HighlightDirective;
  users = [
    {
    name: 'Vladimir',
    age: 20
  },
  {
    name: 'Greti',
    age: 25
  }
];

  isHighlighted = false;

  ngAfterViewInit(): void{
    console.log(this.pDirective);
  }

  toggleHighlightHandler(p: HighlightDirective) {
    console.log(p);
    // p.onMouseEnter();
    // p.highlight();
    this.isHighlighted = !this.isHighlighted;
  }
}
