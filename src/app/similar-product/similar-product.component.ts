import { filter } from 'rxjs';
import { Component, Input, input } from '@angular/core';
import { ProductsService } from '../service/products.service';
import { IProduct } from '../interface/iproduct';
import { SimpleChange } from '@angular/core';

@Component({
  selector: 'app-similar-product',
  templateUrl: './similar-product.component.html',
  styleUrl: './similar-product.component.scss'
})
export class SimilarProductComponent {
  listProduct : IProduct[] =[];

@Input() idType : number=0;
@Input() page_size : number=0;

constructor(private ProductSV :ProductsService){}
 ngOnInit():void{}

 ngOnChanges(changes : SimpleChange ,){
    console.log(changes);
    this.ProductSV.getSimilarProduct(this.idType ,this.page_size ).subscribe((res:any)=> {this.listProduct=res;} );
 }

}
