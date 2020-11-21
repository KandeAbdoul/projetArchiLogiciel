import { Injectable  } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient , HttpHeaders} from '@angular/common/http';
import { Article } from '../models/Article';

@Injectable({
  providedIn: 'root'
})
export class ArticlesServicesService {
<<<<<<< HEAD
  private urlService :String= 'http://6771f22a8ff8.ngrok.io';
=======
  private urlService :String= "http://6771f22a8ff8.ngrok.io";
>>>>>>> 4e9b1a5b1b5584b34b1834036412810db313e3c9
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
<<<<<<< HEAD
    return this.getArticles().subscribe( articles =>
      articles.filter(item => item.categorie.name === name)
    );

=======
     return this.http.get<Article>(`${this.urlService}/articles/categories/${name}`);
>>>>>>> 4e9b1a5b1b5584b34b1834036412810db313e3c9
  }

}
