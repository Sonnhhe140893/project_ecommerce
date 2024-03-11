import { Injectable, input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HelperService } from './common/helper.service';



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
      return sessionStorage.getItem('username') !=null;
    }

    getUserrole(){
      return sessionStorage.getItem('userrole')!=null?sessionStorage.getItem('userrole')?.toString():'';
    }
}
