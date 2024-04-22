import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs';
import { AuthenticationService } from '../service/authentication.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  userlisting:any;
  inputdata :any;

  constructor(private AuthenSV: AuthenticationService,) { }

  ngOnInit(): void {
  this.AuthenSV.getAll()
    .subscribe((res: any) => {
        console.log('ok=', res.ok);
        console.log('body=', res.body);
        console.log('res=', res);
        console.log('Content-Type=', res.headers.get('Content-Type'));
        this.userlisting = res.body;
        console.log('res=====>',res);
      });
 }

  }






