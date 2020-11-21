import { Component, OnInit } from '@angular/core';
import { UsermanagementService } from '../../services/usermanagement.service';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {

  constructor(private userservice: UsermanagementService) { }
  elements: any = [
    // {id: 1, first: 'Mark', last: 'Otto', handle: '@mdo'},
    // {id: 2, first: 'Jacob', last: 'Thornton', handle: '@fat'},
    // {id: 3, first: 'Larry', last: 'the Bird', handle: '@twitter'},
  ];

  headElements = ['Nom', 'Prenom', 'login', 'type', 'Modifier','Supprimer' ];
  ngOnInit(): void {
    this.userservice.getUsers().then((data:any) =>{
      let keys = Object.keys(data);
      console.log(keys);
      for(let i=0; i< keys.length; i++){
      this.elements.push(data[keys[i]]);
      }
      console.log(this.elements);
    })
  }

  

}
