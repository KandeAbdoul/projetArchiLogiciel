import { Component, OnInit } from '@angular/core';
import { Article} from '../../models/Article';
import { ArticlesServicesService } from '../../services/articles-services.service';
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  config:any;
  page = 1;
  pageSize =4;
  articles:Article[];
  constructor(private articlesService:ArticlesServicesService) {
   }

  ngOnInit(): void {
    this.getArticles();
  }
  getArticles(){
      this.articlesService.getArticles().subscribe(articles =>{
        this.articles = articles;
        this.config = { itemsPerPage: 4, currentPage: 1, totalItems: this.articles.length};
    });
  }



  pageChanged(event){
    this.config.currentPage = event;
  }

  articleSearch(articles){
    this.articles =articles;
    articles.forEach(article =>
    console.log(`From ArticleComponent: ${article.articleId}`));
  }

}
