import { Injectable  } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient , HttpHeaders} from '@angular/common/http';
import { Article } from '../models/Article';

@Injectable({
  providedIn: 'root'
})
export class ArticlesServicesService {
  private urlService :String= "http://localhost:8081";
  constructor(private http:HttpClient) { }

  getArticleByCateg(id:Number):Observable<Article[]>{
    return this.http.get<Article[]>(`${this.urlService}/articles/categorie/${id}`);
  }

  getArticles():Observable<Article[]>{
    return this.http.get<Article[]>(`${this.urlService}/articles`);
  }

  getArticleById(id:Number):Observable<Article>{
    return this.http.get<Article>(`${this.urlService}/articles/${id}`);
  }

  getArticleByCategName(name:string){
    return this.getArticles().subscribe( articles =>
      articles.filter(item => item.categorie.name === name)
    );

  }

}
