import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs';
import { IProduct } from '../interface/iproduct';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  listP: any;

  constructor(private http: HttpClient,private CartSV:CartService ) {
    this.http.get('http://localhost:3000/sanpham', { observe: 'response' })
       .pipe(catchError((res: any)=> res))
      .subscribe((res: any) => {
        console.log('ok=', res.ok);
        console.log('body=', res.body);
        console.log('res=', res);
        console.log('Content-Type=', res.headers.get('Content-Type'));
        this.listP = res.body;
      });



  }
  addToCard(product: IProduct) {
    this.CartSV.addToCart(product);
    alert('Đã thêm vào giỏ');
  }

}
