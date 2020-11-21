import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsermanagementService {
  constructor(private http: HttpClient) {}

  getUsers(){
    return new Promise((resolve, reject) =>{
      this.http.get('http://127.0.0.1:3030/users').subscribe(data =>{
        resolve(data);
      });
    });
   
  }

  addUser(name, lastname, type, login, password){
    return new Promise((resolve, reject) =>{
      this.http.get('http://127.0.0.1:3030/add-user?name='+name+'&identifier='+lastname+'&login='+login+'&password='+password+'&type='+type).subscribe(
        (res) => {return res});
    });
  }
}
