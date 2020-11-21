import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
import { NavigationComponent } from './admin/navigation/navigation.component';
import { ArticleComponent } from './components/article/article.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { SommaireComponent } from './components/sommaire/sommaire.component';
import { UtilisateurComponent } from './admin/utilisateur/utilisateur.component';
import { EditeurComponent } from './admin/editeur/editeur.component';
=======
import { ArticleComponent } from './components/article/article.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { SommaireComponent } from './components/sommaire/sommaire.component';
>>>>>>> 4e9b1a5b1b5584b34b1834036412810db313e3c9


const routes: Routes = [
  {
    path: '',
<<<<<<< HEAD
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
=======
    component:ArticlesComponent,
  },
  {
    path: 'detail/:id',
    component:SommaireComponent
>>>>>>> 4e9b1a5b1b5584b34b1834036412810db313e3c9
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
