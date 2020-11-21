import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Article } from 'src/app/models/Article';
import { ArticlesServicesService } from 'src/app/services/articles-services.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sommaire',
  templateUrl: './sommaire.component.html',
  styleUrls: ['./sommaire.component.css']
})
export class SommaireComponent implements OnInit {
<<<<<<< HEAD
  image:string = "../../../assets/images/1.jpeg";
=======
  image:string ;
>>>>>>> 4e9b1a5b1b5584b34b1834036412810db313e3c9
  article:Article;
  id:string;
  constructor(private articleService:ArticlesServicesService,private route:ActivatedRoute) {
    console.log("constructeur");
  }

  ngOnInit(): void {
    this.seeDetails();
  }

  async seeDetails(){
    this.id = this.route.snapshot.paramMap.get('id');
    this.articleService.getArticleById(parseInt(this.id)).subscribe(article => {
        this.article = article;
<<<<<<< HEAD
=======
        this.image =  "../../../assets/images/"+this.article.articleId+".jpeg";
>>>>>>> 4e9b1a5b1b5584b34b1834036412810db313e3c9
        console.log(this.article);
  });
  }
}
