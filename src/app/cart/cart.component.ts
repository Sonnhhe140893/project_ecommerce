import { Icart } from './../interface/icart';
import { subscribe } from 'diagnostics_channel';
import { Component, Output } from '@angular/core';
import { CartService } from '../service/cart.service';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  
  constructor(private CartSV :CartService){}
  items: any = this.CartSV.getListCartLocal();
  CartItems : Icart[] = []
  ngOnInit():void{

  }
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
}
