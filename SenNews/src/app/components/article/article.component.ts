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
<<<<<<< HEAD
=======
  image :string;
>>>>>>> 4e9b1a5b1b5584b34b1834036412810db313e3c9
  categorie ;

  constructor(private articleService:ArticlesServicesService,private router: Router) { }

  ngOnInit(): void {
    this.categorie = this.article.categorie;
<<<<<<< HEAD
=======
    this.image =  "../../../assets/images/"+this.article.articleId+".jpeg";
>>>>>>> 4e9b1a5b1b5584b34b1834036412810db313e3c9
    console.log(this.article);
  }



}
