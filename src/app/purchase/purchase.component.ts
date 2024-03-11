import { HelperService } from './../service/common/helper.service';
import { Component } from '@angular/core';
import { CartService } from '../service/cart.service';
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

  constructor(private CartSV: CartService, private helperService: HelperService) {}

  ngOnInit() {}

  creatOrder() {
    this.CartSV.getCreatOrder(
      this.name,
      this.email,
      this.address,
      this.phonenumber
    ).subscribe((res) => {
      console.log(res);
      console.log(res.body);
      console.log(res.ok);
      if(res.ok == false){
        alert(res.statusText);
      }else{
        let body:any = res.body ; let idPurchase: number= Number(body.id);

        // this.CartSV..forEach(
        //    (item : any) => this.CartSV.getOrderDetails(idPurchase, item ).subscribe(res => console.log(res))
        //  )
      } location.href="/";
    });
  }


}
