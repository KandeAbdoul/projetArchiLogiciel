import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
=======
import { NgModule } from '@angular/core';
>>>>>>> 4e9b1a5b1b5584b34b1834036412810db313e3c9
import {HttpClientModule } from '@angular/common/http' ;
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { ArticleComponent } from './components/article/article.component';
import { HeaderComponent } from './components/header/header.component';
import { CarousselComponent } from './components/caroussel/caroussel.component';
import { SearchComponent } from './components/search/search.component';
<<<<<<< HEAD
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { LoginComponent } from './admin/login/login.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { NavigationComponent } from './admin/navigation/navigation.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { NgxSoapModule } from 'ngx-soap';
import { UtilisateurComponent } from './admin/utilisateur/utilisateur.component';
import { EditeurComponent } from './admin/editeur/editeur.component';

=======
>>>>>>> 4e9b1a5b1b5584b34b1834036412810db313e3c9

@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    ArticleComponent,
    HeaderComponent,
    CarousselComponent,
    SearchComponent,
<<<<<<< HEAD
    LoginComponent,
    DashboardComponent,
    NavigationComponent,
    UtilisateurComponent,
    EditeurComponent,
=======
>>>>>>> 4e9b1a5b1b5584b34b1834036412810db313e3c9
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
<<<<<<< HEAD
    FormsModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    NgxSoapModule,

  ],
  providers: [],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ],
=======
    FormsModule
  ],
  providers: [],
>>>>>>> 4e9b1a5b1b5584b34b1834036412810db313e3c9
  bootstrap: [AppComponent]
})
export class AppModule { }
