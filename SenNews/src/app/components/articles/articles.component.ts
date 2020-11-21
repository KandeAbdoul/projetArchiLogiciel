import { Component, OnInit } from '@angular/core';
import { Article} from '../../models/Article';
import { ArticlesServicesService } from 'src/app/services/articles-services.service';
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  articles:Article[];
  constructor(private articlesService:ArticlesServicesService) { }

  ngOnInit(): void {
    this.getArticles();
  }

  getArticles(){
      this.articlesService.getArticles().subscribe(articles =>{
        this.articles = articles;
    });
  }

}
