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
     api = 'http://localhost:3000/taikhoan';
    getAll(){
     return this.http.get(this.api);
    }
    getUserByCode(id:any){
      return this.http.get(this.api + '/' +id);
    }

    procceedregister(inputdata:any){
      return this.http.post(this.api  ,inputdata);
    }

    updateUser(id:any ,inputdata:any){
      return this.http.put(this.api + '/' + id , inputdata);
    }

    isloggedIn(){
      return this.helperService.getItems('username', 'string')!=null;
    }

    getUserrole(){
      return this.helperService.getItems('role', 'string')!=null?this.helperService.getItems('role', 'string')?.toString():'';
    }
}
