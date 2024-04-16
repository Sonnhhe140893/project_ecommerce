import { Component } from '@angular/core';
import { ProductsService } from '../service/products.service';
import { IProductsByType } from '../interface/iproducts-by-type';
@Component({
  selector: 'app-product-by-type',
  templateUrl: './product-by-type.component.html',
  styleUrl: './product-by-type.component.scss',
})
export class ProductByTypeComponent {


  constructor(private ProductSV: ProductsService) {}
  producttype: IProductsByType[]= [];

  ngOnInit():void {
    this.ProductSV.getListProductByType().subscribe(res =>
        {
            this.producttype=res

        });
  }

}
