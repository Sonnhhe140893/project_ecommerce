import { ICart } from './../interface/icart';
import { subscribe } from 'diagnostics_channel';
import { HelperService } from './common/helper.service';
import { observeOn, filter } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IProduct } from '../interface/iproduct';

const api = 'http://localhost:3000';
@Injectable({
    providedIn: 'root',
})
export class CartService {
    constructor(
        private http: HttpClient,
        private helperService: HelperService
    ) {}

    addToCart(p: IProduct) {
        let items = this.helperService.getItems('cart');
        console.log('old data add to cart------> ', items);
        if (items?.length > 0) {
            let index = items.findIndex((res: any) => res.idp == p.id);
            if (index >= 0) {
                items[index].quantityp++;
            } else {
                let c: ICart = {
                    idp: p.id,
                    namep: p.tensp,
                    picep: p.giasp,
                    quantityp: 1,
                    imagep: p.hinh,
                };
                items.push(c);
            }
        } else {
            items = [];
            let c: ICart = {
                idp: p.id,
                namep: p.tensp,
                picep: p.giasp,
                quantityp: 1,
                imagep: p.hinh,
            };
            items.push(c);
        }
        console.log('new data add to cart------> ', items);
        this.helperService.setItem('cart', items);
    }

    addToCartV2(p: IProduct) {
        let items = this.helperService.getItems('cart');
        if (items?.length > 0) {
            let index = items.findIndex((res: any) => res.id == p.id);
            if (index >= 0) {
                items[index].quantityp++;
            } else {
                let c: any = {
                    ...p,
                    quantityp: 1,
                };
                items.push(c);
            }
        } else {
            items = [];
            let c: any = {
                ...p,
                quantityp: 1,
            };
            items.push(c);
        }
        console.log('new data add to cart------> ', items);
        this.helperService.setItem('cart', items);
    }

    getListCartLocal() {
        return this.helperService.getItems('cart');
    }

    clearCart() {
        this.helperService.deleteItem('cart');
    }

    getCreatOrder(
        name: string,
        email: string,
        address: string,
        phonenumber: string,
        user_id: any
    ) {
        if (user_id) {
            return this.http.post(
                `${api}/donhang`,
                {
                    name: name,
                    email: email,
                    address: address,
                    phonenumber: phonenumber,
                    user_id: user_id,
                },
                { observe: 'response' }
            );
        } else {
            return this.http.post(
                `${api}/donhang`,
                {
                    name: name,
                    email: email,
                    address: address,
                    phonenumber: phonenumber,
                },
                { observe: 'response' }
            );
        }
    }

    setOrderDetails(idPurchase: number, item: ICart) {
        return this.http.post<any>(
            `${api}/chitietdonhang`,
            {
                idPurchase: idPurchase,
                idP: item.idp,
                nameP: item.namep,
                piceP: item.picep,
                quantityP: item.quantityp,
            },
            { observe: 'response' }
        );
    }
    getOrderDetails(filters: any) {
        let params = new HttpParams();
        if (filters?.idPurchase)
            params = params.append('idPurchase', filters.idPurchase);
        let url = `${api}/chitietdonhang`;
        return this.http.get<any>(url, { params: params });
    }

    getListOrders(filters:any) {
        let params = new HttpParams();
        if(filters?.email){
            params = params.append('email', filters.email);
        }
        let url = `${api}/donhang`;
        return this.http.get<any>(url,{params:params});
    }

    removeFromCart(index: number) {
        let items = this.helperService.getItems('cart');
        if (items?.length > 0) {
            items.splice(index, 1);
        }
        this.helperService.setItem('cart', items);
    }

}
