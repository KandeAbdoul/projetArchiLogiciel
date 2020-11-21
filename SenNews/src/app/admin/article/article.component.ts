import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/Article';
import { ArticlesServicesService } from '../../services/articles-services.service';

@Component({
  selector: 'app-ajout-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class AjoutArticleComponent implements OnInit {
  form: {
    titre: '',
    sommaire: '',
    content: ''
  };

  articles: Article[];
  constructor(private articlesService: ArticlesServicesService) { }

  ngOnInit(): void {
    this.getArticles();
  }

  getArticles(){
    this.articlesService.getArticles().subscribe(articles =>{
      this.articles = articles;
      console.log(this.articles);
  });
}

}
