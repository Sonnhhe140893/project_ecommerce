import { Component } from '@angular/core';
import { IProduct } from '../interface/iproduct';
import { ProductsService } from '../service/products.service';
import { filter } from 'rxjs';
import { CartService } from '../service/cart.service';
@Component({
  selector: 'app-top-sellers-product',
  templateUrl: './top-sellers-product.component.html',
  styleUrl: './top-sellers-product.component.scss'
})
export class TopSellersProductComponent {
  productlist :IProduct[]=[];
  constructor(private ProductSv :ProductsService, private CartSV:CartService ){
}
 ngOnInit():void{
  this.getData();
 }

 getData(){
  let filter: any= {
    category_id: 2
  }
  this.ProductSv.getProductTopSellers(filter)
  .subscribe((res) => this.productlist= res)
 }

 test(id: number) {
   console.log(id);
 }
 addToCard(product: IProduct) {
    this.CartSV.addToCart(product);
    alert('Đã thêm vào giỏ');
  }
}
