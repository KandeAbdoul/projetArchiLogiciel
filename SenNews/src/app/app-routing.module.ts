import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigationComponent } from './admin/navigation/navigation.component';
import { ArticleComponent } from './components/article/article.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { SommaireComponent } from './components/sommaire/sommaire.component';
import { UtilisateurComponent } from './admin/utilisateur/utilisateur.component';
import { EditeurComponent } from './admin/editeur/editeur.component';


const routes: Routes = [
  {
    path: '',
    component: ArticlesComponent,
  },
  {
    path: 'detail/:id',
    component: SommaireComponent
  },
  {
    path: 'admin',
    component: NavigationComponent,
    children:[
      {path: 'administrateur', component: UtilisateurComponent },
      {path: 'ajout-user', component: EditeurComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
