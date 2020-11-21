import { Component, OnInit } from '@angular/core';
import { UsermanagementService } from '../../services/usermanagement.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {

  state:any;
  constructor(private userservice: UsermanagementService, private router: Router) { }
  elements: any;
  keys: any = [];
  headElements = ['Nom', 'Prenom', 'login', 'type', 'Modifier' ];
  ngOnInit(): void {
      this.getUsers();
  }

  getUsers(){
    this.elements = [];
    console.log("le current user "+JSON.stringify(this.userservice.getCurrentUser()));
    this.userservice.getUsers().then((data:any) =>{
      this.keys = Object.keys(data);
      console.log(this.keys);
      for(let i=0; i< this.keys.length; i++){
      this.elements.push(data[this.keys[i]]);
      }
     
    });
  }

  deleteUser(id){
    this.userservice.deleteUser(id).then((res) =>{
      console.log('Supprimé');
    }).catch(e => console.log(e));
    
    this.state = true;
    this.getUsers();
  }

}
