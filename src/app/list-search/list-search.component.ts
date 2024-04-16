import { Component, Input,  OnChanges, input } from '@angular/core';
import { ProductsService } from '../service/products.service';
import { IProduct } from '../interface/iproduct';
import { error } from 'console';


@Component({
  selector: 'app-list-search',
  templateUrl: './list-search.component.html',
  styleUrl: './list-search.component.scss'
})
export class ListSearchComponent  implements OnChanges {


    @Input() search: string='' ;
    listProductSearch : IProduct[]=[];
    filterProductByName: IProduct[]=[];
    constructor(private productSV :ProductsService){

    }
    ngOnInit():void{

    }



    ngOnChanges() {
        if (this.search.trim() !== ''){
            this.productSV.searchProducts(this.search).subscribe((res)=>{

                this.listProductSearch=res;
                this.filterProductByName= this.listProductSearch;
            },
        );

    }
            }



  filterProducts(){
    this.filterProductByName = this.listProductSearch.filter((res)=> {
        res.tensp.toLowerCase().includes(this.search.toLowerCase())
    });
  }

}
