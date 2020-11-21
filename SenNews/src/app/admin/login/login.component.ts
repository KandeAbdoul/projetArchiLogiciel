import { Component, OnInit } from '@angular/core';
import { UsermanagementService } from '../../services/usermanagement.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form = {
    login: '',
    password: ''
  };
  constructor(private userservice: UsermanagementService) { }

  ngOnInit(): void {
  }

  login(){
    this.userservice.login(this.form.login, this.form.password);
  }

}
