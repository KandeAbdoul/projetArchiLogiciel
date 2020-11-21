import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Article } from 'src/app/models/Article';
import { ArticlesServicesService } from 'src/app/services/articles-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input() article:Article;
  image :string;
  categorie ;

  constructor(private articleService:ArticlesServicesService,private router: Router) { }

  ngOnInit(): void {
    this.categorie = this.article.categorie;
    this.image =  "../../../assets/images/"+this.article.articleId+".jpeg";
    console.log(this.article);
  }



}
