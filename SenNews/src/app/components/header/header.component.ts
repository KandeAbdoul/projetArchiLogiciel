import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/Article';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  articles:Article[];
  constructor() { }

  ngOnInit(): void {
  }

  articleSearch(articles){
    this.articles =articles;
    console.log(`From HeaderComponent: ${articles}`)
  }

}
