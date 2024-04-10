import { Component } from '@angular/core';
import { ProductsService } from '../service/products.service';
import { IProduct } from '../interface/iproduct';
import { CartService } from '../service/cart.service';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { error } from 'console';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
    searchQuery :string='';
    searchResults : IProduct[]= [];
    constructor(private producSV:ProductsService , private CarSV:CartService){

    }

    search(){
        if(this.searchQuery.trim() === '') return;
            this.producSV.searchProducts(this.searchQuery).subscribe((res:any)=>
                {
                this.searchResults = res;

                },
            (error:any)=>{
                console.error('Error',error);
            }
        );
        }


    addToCard(product: IProduct) {
        this.CarSV.addToCart(product);
        alert('Đã thêm vào giỏ');
      }

}
