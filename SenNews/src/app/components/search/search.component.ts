import { Component, OnInit ,EventEmitter ,Output} from '@angular/core';
import { ArticlesServicesService } from 'src/app/services/articles-services.service';
import { Article } from 'src/app/models/Article';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
<<<<<<< HEAD
  @Output() searchArticle:EventEmitter<string> = new EventEmitter();
  categorieName:string;
  articles:Article[];
=======
  categorieName:string;
  articles:Article [];
>>>>>>> 4e9b1a5b1b5584b34b1834036412810db313e3c9
  constructor(private articlesService:ArticlesServicesService) {
    console.log(this.categorieName);
  }

  ngOnInit(): void {
  }

  getArticlesByCateg(){
<<<<<<< HEAD
    this.searchArticle.emit(this.categorieName);
=======
    this.articlesService.getArticleByCategName(this.categorieName).subscribe(articles =>{
      //this.articles = articles;
      console.log(articles);
    });
>>>>>>> 4e9b1a5b1b5584b34b1834036412810db313e3c9
  }
}
