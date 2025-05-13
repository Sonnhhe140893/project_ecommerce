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
        this.listP = res.body;
        console.log(this.listP);
      });

  }

  addToCard(product: IProduct) {
    this.CartSV.addToCart(product);
    alert('Đã thêm vào giỏ');
  }

}
