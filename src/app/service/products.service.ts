import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IProduct } from '../interface/iproduct';
import { Observable, filter, observeOn } from 'rxjs';
import { IProductsByType } from '../interface/iproducts-by-type';
const api = 'http://localhost:3000';
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getProductById(id: number = 0) {
    return this.http.get(`${api}/sanpham/${id}`);
  }

  getProductTopSellers(filter: any) {
    let param = new HttpParams();
    if (filter?.category_id) {
      param = param.append('idLoai', filter.category_id);
    }
    let url = `${api}/sanpham?_sort=solanxem&_order=desc&_limit=6`;
    return this.http.get<IProduct[]>(url, { params: param });
  }

  getNewProduct(filter: any) {
    let param = new HttpParams();
    if (filter?.category_id) {
      param = param.append('idLoai', filter.category_id);
    }
    let url = `${api}/sanpham?_sort=ngay&_order=desc&_limit=6`;
    return this.http.get<IProduct[]>(url, { params: param });
  }

  getListProductByType() {
    let url = `${api}/loaisp`;
    return this.http.get<IProductsByType[]>(url);
  }

  getTypeProducts(filter: any) {
    let params = new HttpParams().set('_sort', 'ngay').set('_order', 'desc');
    if (filter?.page) params = params.append('_page', filter?.page);
    if (filter?.idType) params = params.append('idLoai', filter?.idType);
    if (filter?.page_size) params = params.append('_limit', filter?.page_size);
    if (filter?.namep) params = params.append('tensp', filter?.namep);
    // Thêm 1 điều kiên filters?.name ở đây mà append cái giá trị đó

    var url = `${api}/sanpham`;
    return this.http.get<any>(url, { params: params, observe: 'response' });
  }
  getNameProductType(idType: number = 0) {
    var url = `${api}/loaisp/${idType}`;
    return this.http.get<IProductsByType[]>(url);
  }
  getViewProductDetail(id: any){
    var url = `${api}/sanpham/${id}`;
    return this.http.get<IProduct[]>(url)
  }

   getSimilarProduct(idType: number = 0, page_size: number = 0) {//Thừa, dùng function getTypeProduct kia, logic tự nghĩ tiếp, nhìn mẫu trên đó rồi
    var url = `${api}/sanpham?idLoai=${idType}&_limit=${page_size}`;
    return this.http.get<IProduct[]>(url);
  }

  searchProducts(query: string): Observable<any> {
    return this.http.get( `${api}/sanpham?q=${query}` , );
  }

}
