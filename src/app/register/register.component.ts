import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from '../service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  constructor (private builder :FormBuilder, private toastr: ToastrService,
    private authenSV :AuthenticationService, private router :Router, ){}

  registerform = this.builder.group({
    id: this.builder.control('',Validators.compose([Validators.required,Validators.minLength(5)])),

    name: this.builder.control('',Validators.required),

    password: this.builder.control('',Validators.compose([Validators.required,Validators.pattern(
        '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}'
    )])),
    email: this.builder.control('',Validators.compose([Validators.required,Validators.email])),
    gender: this.builder.control('male',),
    role: this.builder.control(''),
    isactive: this.builder.control(false),

  })

  proceedRegisteration(){

    if(this.registerform.valid){
      this.authenSV.RegisterUser(this.registerform.value).subscribe((res)=>

      {
        console.log('resssssss=======>', res)
        this.toastr.success('please wait admin accept','Register Successfully')
      this.router.navigate(['login'])
    });

    }else{
      this.toastr.warning('please enter valid data.')
    }
  }
}
