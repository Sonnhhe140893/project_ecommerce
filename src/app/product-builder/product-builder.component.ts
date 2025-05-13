import { Component } from '@angular/core';
import { ProductsService } from '../service/products.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-builder',
  templateUrl: './product-builder.component.html',
  styleUrl: './product-builder.component.scss'
})
export class ProductBuilderComponent {
constructor(
    private productSV :ProductsService,
    private builder :FormBuilder,
    private toastr :ToastrService,
    private router : Router,

){}
createform = this.builder.group({
    id: this.builder.control('',Validators.required),
    tensp: this.builder.control('',Validators.required),
    giasp: this.builder.control('',Validators.required),
    // solanxem:
    // hot:
    mota: this.builder.control('',Validators.required),
    // hinh: this.builder.control('',Validators.required),
    ngay: this.builder.control(Date,Validators.required),
    idLoai: this.builder.control('',Validators.required),
})

proceesdCreateProducts(){
    if(this.createform.valid){
        this.productSV.createProduct(this.createform.value).subscribe((res:any)=>
            {
                console.log('res=======>',res);
            this.toastr.success('create Successfully');
            this.router.navigate(['product']);
        });
        } else{
            this.toastr.warning('create Product fail');
    }
}
}
