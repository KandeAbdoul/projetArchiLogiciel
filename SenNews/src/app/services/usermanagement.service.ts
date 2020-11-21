import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UsermanagementService {
  constructor(private http: HttpClient, private router: Router) {}
  url = "http://127.0.0.1:3030"
  private state;
  user:any;
  public login(login, password){
      this.http.get(this.url+'/login/'+login+'/'+password).subscribe(data =>{
       if(Object.keys(data).length == 1) this.state = false;
       else{
         this.state = true;
         this.user = data;
         this.router.navigate(['admin/administrateur']);
       }
       console.log(data);
      });
    }
    

  getState(){
    return this.state;
  }

  getCurrentUser(){
    return this.user;
  }

  getUsers(){
    return new Promise((resolve, reject) =>{
      this.http.get(this.url+'/users').subscribe(data =>{
        resolve(data);
      });
    });
   
  }

  addUser(name, lastname, type, login, password){
    return new Promise((resolve, reject) =>{
      this.http.get(this.url+'/add-user?name='+name+'&identifier='+lastname+'&login='+login+'&password='+password+'&type='+type).subscribe(
        (res) => {return res});
    });
  }

  
  deleteUser(id){
    console.log(id);
    return new Promise((resolve, reject) =>{
      this.http.get(this.url+'/delete/'+id).subscribe(
        (res) => {
          resolve(res);
        });
    });
  }
}
