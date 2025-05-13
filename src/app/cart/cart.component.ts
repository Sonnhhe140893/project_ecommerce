import { HelperService } from './../service/common/helper.service';
import { subscribe } from 'diagnostics_channel';
import { Component, Output ,EventEmitter} from '@angular/core';
import { CartService } from '../service/cart.service';
import { ICart } from '../interface/icart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  constructor(private CartSV :CartService,private helperSV: HelperService ){}

  items: any = this.CartSV.getListCartLocal();

  ngOnInit():void{}

  totalPayment(){
    let ttpay: number=0;
    this.items.forEach((res: any) => { ttpay += res.quantityp * res.picep });
    return ttpay;
  }
  totalProduct(){
    let ttP : number=0;
    this.items.forEach((res: any) => { ttP += res.quantityp });
    return ttP;
  }

  removeProduct(index: number){
    if(index == -1)
    {
      this.CartSV.clearCart();
    }else {
      this.CartSV.removeFromCart(index);

    }
    this.items = this.CartSV.getListCartLocal();
  }

  onclick(index: number){
    if(index =1){
        this.helperSV.deleteItem('cart');
        this.CartSV.clearCart();
    }

  this.items = this.CartSV.getListCartLocal();
}
}
