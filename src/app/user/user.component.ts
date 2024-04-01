import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  userlisting:any;


  constructor(private http: HttpClient) {
    this.http.get('http://localhost:3000/taikhoan', { observe: 'response' })
       .pipe(catchError((res: any)=> res))
      .subscribe((res: any) => {
        console.log('ok=', res.ok);
        console.log('body=', res.body);
        console.log('res=', res);
        console.log('Content-Type=', res.headers.get('Content-Type'));
        this.userlisting = res.body;
      });
  }
  
  UpdateUser(){

  }
  }



