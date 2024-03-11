import { filter } from 'rxjs';
import { Component } from '@angular/core';
import { ProductsService } from '../service/products.service';
import { IProduct } from '../interface/iproduct';
import { CartService } from '../service/cart.service';
@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrl: './new-product.component.scss',
})
export class NewProductComponent {
  productlist: IProduct[] = [];
  constructor(
    private ProductSV: ProductsService,
    private CartSV: CartService
  ) {}
  ngOnInit(): void {
    this.getData();
  }
  getData() {
    let filter: any = {
      category_id: 1,
    };
    this.ProductSV.getNewProduct(filter).subscribe(
      (res) => (this.productlist = res)
    );


  }

  addToCard(product: IProduct) {
    this.CartSV.addToCart(product);
    alert('Đã thêm vào giỏ');
  }
}
