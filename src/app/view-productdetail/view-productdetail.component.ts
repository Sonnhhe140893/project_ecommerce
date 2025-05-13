
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../service/products.service';
import { IProduct } from '../interface/iproduct';
import { subscribe } from 'diagnostics_channel';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-view-productdetail',
  templateUrl: './view-productdetail.component.html',
  styleUrl: './view-productdetail.component.scss'
})
export class ViewProductdetailComponent {
  constructor(private activeR : ActivatedRoute, private ProductSv: ProductsService , private CartSV :CartService ){ }
  ViewProduct: IProduct = {
    id: 0,
    tensp: '',
    giasp: 0,
    solanxem: 0,
    hinh: '',
    mota: '',
    hot: 0,
    ngay: '',
    idLoai: 0,
  };
  idType: number=0;
  nameType : string='';

  ngOnInit(): void{
     this.activeR.params.subscribe((res:any)=>{
      console.log(res)
      this.getProduct_Details(Number(res?.id));
     });
    }


    getProduct_Details(id :number){
      this.ProductSv.getViewProductDetail(id).subscribe((res:any) => {
        this.ViewProduct =res;
        this.idType = this.ViewProduct.idLoai;
        this.ProductSv.getNameProductType(this.idType).subscribe((res: any) =>
            (this.nameType = res['nameType']

            ));

      });
  }
  addToCard(product : IProduct){
    this.CartSV.addToCart(product);
    alert('Đã thêm vào giỏ');
  }
}


