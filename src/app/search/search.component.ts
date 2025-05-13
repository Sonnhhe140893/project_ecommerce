
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

    constructor( ){
}

    ngOnInit():void{}

    emitSearch(){
     this.searchEvent.emit(this.search);

    }

}

