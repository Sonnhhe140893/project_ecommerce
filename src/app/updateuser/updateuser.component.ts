import { Component } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { HelperService } from '../service/common/helper.service';
import { Router } from '@angular/router';
import { ICart } from '../interface/icart';
@Component({
    selector: 'app-updateuser',
    templateUrl: './updateuser.component.html',
    styleUrl: './updateuser.component.scss',
})
export class UpdateuserComponent {
    gender : string='';
    id : string='';
    password: string='';
    name: string = '';
    email: string = '';
    address: string = '';
    phonenumber: number = 0;
    isactive:boolean=true;
    role: string=';'
    inputdata: any;
    user_id: string = '';
    cart_User: ICart[] = [];
    constructor(
        private authenSV: AuthenticationService,
        private helperSV: HelperService,
        private router: Router
    ) {}
    ngOnInit(): void {

        this.user_id = this.helperSV.getItems('username');
        this.cart_User = this.helperSV.getUserCart(this.user_id);
        this.getUser();
    }
    updateAccount() {
        this.inputdata= {
            id: this.id,
            isactive: this.isactive,
            password: this.password,
            name : this.name,
            gender : this.gender,
            email :this.email,
            address:this.address,
            phonenumber: this.phonenumber,
            role : this.role
        }
         this.authenSV.updateUser(this.user_id,this.inputdata).subscribe((res) => {
            console.log(res);
            this.router.navigate(['/user']);
             }


    )
    }
    //hứng giá trị đẩy ra form
    getUser() {
        this.authenSV.getUserByCode(this.user_id,).subscribe((res: any) => {
          console.log(res);
          this.user_id=res?.user_id;
          this.name = res?.name;
          this.email = res?.email;
          this.address = res?.address?.area;
          this.phonenumber= res?.phonenumber;
          this.password= res?.password;
          this.isactive= res?.isactive;
          this.gender= res?.gender;
          this.role = res?.role;

        });
      }
}
