import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.css']
})
export class TokenComponent implements OnInit {
  genereted = false;
  result = "";
  constructor() { }

  ngOnInit(): void {
  }


  generer(){
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < 45; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    this.result = result;
    this.genereted = true;
  }

}
