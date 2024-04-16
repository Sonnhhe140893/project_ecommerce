
import { Component, EventEmitter, Input, Output,  } from '@angular/core';
import { ProductsService } from '../service/products.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
    @Input() search: string='';
    @Output() searchEvent = new EventEmitter<any>();

    constructor(private producSV:ProductsService , ){
}

    ngOnInit():void{}

    emitSearch(){
     this.searchEvent.emit(this.search);

    }

}

   // searchQuery :string='';
    // searchResults : IProduct[]= [];
    // search(){
    //     if(this.searchQuery.trim() === '') return;

    //         this.producSV.searchProducts(this.searchQuery).subscribe((res:any)=>
    //         {
    //             this.searchResults = res;
    //             this.router.navigate(['/search']);
    //         },
    //         (error:any)=>{
    //             console.error('Error',error);
    //         }
    //     );
    //     }
