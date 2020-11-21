import { Component, OnInit } from '@angular/core';
import { UsermanagementService } from '../../services/usermanagement.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editeur',
  templateUrl: './editeur.component.html',
  styleUrls: ['./editeur.component.css']
})
export class EditeurComponent implements OnInit {
  form = {
    type:'',
    nom: '',
    prenom: '',
    password: '',
    login: ''
  };

  state: any;
  constructor(private userservice: UsermanagementService, private router: Router) { }

  ngOnInit(): void {
  }

  ajouter(){
    console.log('je suis dans la fonccion');
    this.userservice.addUser(this.form.nom, this.form.prenom, this.form.type, this.form.login, this.form.password).then((res) =>{
      console.log('hihi');
    });
    this.state = true;
  }

}
