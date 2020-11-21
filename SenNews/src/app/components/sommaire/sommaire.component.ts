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
  image:string = "../../../assets/images/1.jpeg";
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
        console.log(this.article);
  });
  }
}
