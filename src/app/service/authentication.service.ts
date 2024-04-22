import { Injectable, input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HelperService } from './common/helper.service';
import { NgIf } from '@angular/common';
import { Observable } from 'rxjs';
import { Iccount } from '../interface/iccount';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private http: HttpClient,
    private helperService:HelperService) {}

    apiAccount = 'http://localhost:3000/taikhoan';

    getAll(){
     return this.http.get(this.apiAccount,{ observe: 'response' });
    }
    getUserByCode(id:any){
      return this.http.get(this.apiAccount + '/' +id);
    }

    RegisterUser(inputdata:any){
     return this.http.post(this.apiAccount,inputdata)
  }


    updateUser(id:any ,inputdata:Iccount){
      return this.http.put(this.apiAccount + '/' + id ,
      {

        name: inputdata.name,
        email: inputdata.email,
        gender: inputdata.gender,
        address:inputdata.address,
        role:inputdata.role,
        phonenumber: inputdata.phonenumber,

        },
    { observe: 'response' });
    }

    isloggedIn() {
      return this.helperService.getItems('username', 'string')!=null;
    }

    getUserrole():Observable<any>{
      return this.helperService.getItems('role', 'string')!=null?this.helperService.getItems('role', 'string')?.toString():'';
    }

}
