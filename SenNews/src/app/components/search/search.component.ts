import { Component, OnInit ,EventEmitter ,Output} from '@angular/core';
import { ArticlesServicesService } from 'src/app/services/articles-services.service';
import { Article } from 'src/app/models/Article';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  categorieName:string;
  articles:Article [];
  constructor(private articlesService:ArticlesServicesService) {
    console.log(this.categorieName);
  }

  ngOnInit(): void {
  }

  getArticlesByCateg(){
    this.articlesService.getArticleByCategName(this.categorieName).subscribe(articles =>{
      //this.articles = articles;
      console.log(articles);
    });
  }
}
