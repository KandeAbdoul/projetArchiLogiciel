import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleComponent } from './components/article/article.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { SommaireComponent } from './components/sommaire/sommaire.component';


const routes: Routes = [
  {
    path: '',
    component:ArticlesComponent,
  },
  {
    path: 'detail/:id',
    component:SommaireComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
