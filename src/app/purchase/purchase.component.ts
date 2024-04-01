import { Icart } from './../interface/icart';
import { HelperService } from './../service/common/helper.service';
import { AuthenticationService } from '../service/authentication.service';
import { Component } from '@angular/core';
import { CartService } from '../service/cart.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrl: './purchase.component.scss',
})
export class PurchaseComponent {
  name: string = '';
  email: string = '';
  address: string = '';
  phonenumber: string = '';
  user_id: string = '';
  cart_User: Icart[] = [];
  constructor(
    private CartSV: CartService,
    private helperService: HelperService,
    private AuthenSV: AuthenticationService,
    private Router: Router
  ) {}

  ngOnInit(): void {
    this.user_id = this.helperService.getItems('username');
    console.log('onuinit-------> ', this.user_id);
    this.cart_User = this.helperService.getUserCart(this.user_id);
    this.getUser();
  }

  creatOrder() {
    this.CartSV.getCreatOrder(
      this.name,
      this.email,
      this.address,
      this.phonenumber,
      this.user_id,

    ).subscribe((res) => {
      if (res.ok == false) {
        alert(res.statusText);
      } else {
        let body: any = res.body;
        let idPurchase: number = Number(body.id);

        let cart = this.helperService.getItems('cart');
        cart.forEach(
          (item: any) => {
            console.log("item---------> ", item);
            this.CartSV.getOrderDetails( idPurchase,  item).subscribe( res => {
              console.log(res)
            })
          }
        )
      }
      this.Router.navigate(['/']);
    });
  }

  getUser() {
    this.AuthenSV.getUserByCode(this.user_id).subscribe((res: any) => {
      console.log(res);
      this.name = res?.name;
      this.email = res?.email;
      this.address = res?.address?.area;
    });
  }
}
