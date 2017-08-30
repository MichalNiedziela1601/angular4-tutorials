import {Component, OnInit, Input} from '@angular/core';
import {Article} from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  @Input() article: Article;

  constructor() {
    this.article = new Article('Angular 2','http://angular.io',10);
  }

  upVote() {
    this.article.voteUp();
  }

  downVote() {
    this.article.voteDown();
  }

  ngOnInit() {
  }

}
