import { Injectable, input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HelperService } from './common/helper.service';
import { NgIf } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private http: HttpClient,
    private helperService:HelperService) {}

    apiAccount = 'http://localhost:3000/taikhoan';

    getAll(){
     return this.http.get(this.apiAccount);
    }
    getUserByCode(id:any){
      return this.http.get(this.apiAccount + '/' +id);
    }

    procceedregister(inputdata:any){
      return this.http.post(this.apiAccount   ,inputdata);
    }

    updateUser(id:any ,inputdata:any){
      return this.http.put(this.apiAccount + '/' + id , inputdata);
    }

    isloggedIn(){
      return this.helperService.getItems('username', 'string')!=null;
    }

    getUserrole(){
      return this.helperService.getItems('role', 'string')!=null?this.helperService.getItems('role', 'string')?.toString():'';
    }

}
