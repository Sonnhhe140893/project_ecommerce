import { HelperService } from './common/helper.service';
import { observeOn } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../interface/iproduct';
import { Icart } from '../interface/icart';
const api = 'http://localhost:3000';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(
    private http: HttpClient,
    private helperService:HelperService
    ) {}

  addToCart(p: IProduct) {
    let items = this.helperService.getItems("cart");
    console.log("old data add to cart------> ", items);
    if(items?.length > 0) {
      let index = items.findIndex((res: any) => res.idp == p.id);
      if (index >= 0) {
        items[index].quantityp++;
      } else {
        let c: Icart = {
          idp: p.id,
          namep: p.tensp,
          picep: p.giasp,
          quantityp: 1,
          imagep: p.hinh,
        };
        items.push(c);
      }
    } else {
      items = [];
      let c: Icart = {
          idp: p.id,
          namep: p.tensp,
          picep: p.giasp,
          quantityp: 1,
          imagep: p.hinh,
        };
        items.push(c);
    }
    console.log("new data add to cart------> ", items);
    this.helperService.setItem("cart", items);
  }

  getListCartLocal() {
   return this.helperService.getItems("cart")
  }

  clearCart() {
    this.helperService.deleteItem("cart")
  }

  getCreatOrder(
    name: string,
    email: string,
    address: string,
    phonenumber: string
  ) {
    return this.http.post(
      `${api}/donhang`,
      { name: name, email: email, address: address, phonenumber: phonenumber },
      { observe: 'response' }
    );
  }

  getOrderDetails(idPurchase: number, item: Icart) {
    return this.http.post<any>(
      `${api}/chitietdonhang`,
      {
        idPurchase: idPurchase,
        idP: item.idp,
        nameP: item.namep,
        piceP: item.picep,
        quantityP: item.quantityp,
      },
      { observe: 'response' }
    );
  }

  removeFromCart(index: number) {
    let items = this.helperService.getItems("cart");
    if(items?.length > 0) {
      items.splice(index, 1);
    }
    this.helperService.setItem("cart", items);

  }
}
