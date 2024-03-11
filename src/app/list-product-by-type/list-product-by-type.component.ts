import { Component } from '@angular/core';
import { ProductsService } from '../service/products.service';
import { IProduct } from '../interface/iproduct';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../service/cart.service';
@Component({
  selector: 'app-list-product-by-type',
  templateUrl: './list-product-by-type.component.html',
  styleUrl: './list-product-by-type.component.scss',
})
export class ListProductByTypeComponent {
  listProduct: IProduct[] = [];
  nameType: string = '';
  idType: number = 0;
  pageNum: number = 1;
  pageSize: number = 2;
  total: number = 0;
  constructor(
    private ProductSV: ProductsService,
    private rout: ActivatedRoute,
    private CartSV :CartService,
  ) {}

  ngOnInit(): void {
    this.rout.params.subscribe((res: any) => {
      this.idType = Number(res?.id);
     this.pageNum = 1;
      console.log("-----------",res.id);
      let filters: any = {
        page: this.pageNum,
        idType: this.idType,
        page_size: this.pageSize,

      };
      this.getProductsByFilter(filters);
    });


  }

  NextPage(p = 1) {
    this.pageNum = p;
    let filters: any = {
      page: this.pageNum,
      idType: this.idType,
      page_size: this.pageSize,
    };
    this.getProductsByFilter(filters);

  }

  getProductsByFilter(filters: any) {
    console.log(filters);
    this.ProductSV.getTypeProducts(filters).subscribe((res) => {
      this.listProduct = res.body;
      this.total = Number(res.headers.get('X-Total-Count'));
    });
  }
  addToCard(product : IProduct){
    this.CartSV.addToCart(product);
    alert('Đã thêm vào giỏ');
 }
}
