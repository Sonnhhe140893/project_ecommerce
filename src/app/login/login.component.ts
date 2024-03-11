import { Component } from '@angular/core';
import { Form, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from '../service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(
    private builder: FormBuilder,
    private toastr: ToastrService,
    private authenSV: AuthenticationService,
    private router: Router
  ) {}

  userdata: any;
  passworddata: any;

  loginform = this.builder.group({
    username: this.builder.control('', Validators.required),
    password: this.builder.control('', Validators.required),
  });

  proceedlogin() {
    console.log('Userdata =>>>>>>>>', this.loginform.value);

    if (this.loginform.valid) {
      this.authenSV.getUserByCode(this.loginform.value.username).subscribe((res) => {
          this.userdata = res;
          console.log('Userdata =>>>>>>>>', this.userdata);
          if(this.userdata.password===this.loginform.value.password){
                if(this.userdata.isactive){

                }else{
                  this.toastr.error("Please contract admin","In active user")
                }
          }else{
            this.toastr.error("Invalid credentials")
          }
        });
    }

  }
}
