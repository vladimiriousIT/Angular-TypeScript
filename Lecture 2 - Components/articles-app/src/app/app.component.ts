import { Component } from '@angular/core';
import { Article } from 'src/models/article.model';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Articles App';
  articles = Article;
}
