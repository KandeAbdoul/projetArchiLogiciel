import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigationComponent } from './admin/navigation/navigation.component';
import { ArticleComponent } from './components/article/article.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { SommaireComponent } from './components/sommaire/sommaire.component';
import { UtilisateurComponent } from './admin/utilisateur/utilisateur.component';
import { EditeurComponent } from './admin/editeur/editeur.component';
import { TokenComponent } from './admin/token/token.component';
import { LoginComponent } from './admin/login/login.component';
import { AuthGuard } from './auth.guard';
import { AjoutCategorieComponent } from './admin/categorie/categorie.component';
import { AjoutArticleComponent } from './admin/article/article.component';


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
      {path: 'administrateur', component: UtilisateurComponent,canActivate:[
        AuthGuard
      ] },
      {path: 'ajout-user', component: EditeurComponent, canActivate:[
        AuthGuard
      ]},
      {path: 'ajout-article', component: AjoutArticleComponent, canActivate:[
        AuthGuard
      ]},
      {path: 'ajout-categorie', component: AjoutCategorieComponent, canActivate:[
        AuthGuard
      ]},
      {path: 'token', component: TokenComponent, canActivate:[
        AuthGuard
      ]}
     
    ]
    
  },
  {
    path: 'detail/:id',
    component:SommaireComponent
  },
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
