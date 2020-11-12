import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/models/article.model';
import { ArticleData } from '../data/data';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  articles: Article[];
  private symbols = 250;
  @Input() article: Article;
  @Input() articleDesc: string;
  descToShow: string;
  articleDescLen: number;
  showReadMoreBtn = true;
  showHideBtn = false;
  imageIsShown = false;
  imageButtonTitle = 'Show Image';

  readMore(): void{
    this.articleDescLen = this.symbols;
    if (this.articleDescLen === this.articleDesc.length){
      this.showHideBtn = true;
      this.showReadMoreBtn = false;
    } else {
      this.descToShow = this.articleDesc.substring(0, this.articleDescLen);
    }
  }

  toggleImmage(): void {
    this.imageIsShown = !this.imageIsShown;
    this.imageButtonTitle = this.imageButtonTitle === 'Show Image' ? 'Hide Image' : 'Show Image';
  }

  hideDesc(): void {
    this.descToShow = '';
    this.articleDescLen = 0;
    this.showHideBtn = false;
    this.showReadMoreBtn = true;
  }

  constructor() {
    this.articleDescLen = 0;
    this.descToShow = '';
  }

  ngOnInit() {
    this.articles = new ArticleData().getData();
  }

}
