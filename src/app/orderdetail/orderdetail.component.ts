import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';
import { IOrder } from '../interface/order.interface';
import { HelperService } from '../service/common/helper.service';


@Component({
    selector: 'app-orderdetail',
    templateUrl: './orderdetail.component.html',
    styleUrl: './orderdetail.component.scss',
})
export class OrderdetailComponent  {
    listOrders: IOrder[] = [];
     filter = {
        email : this.helperSV.getItems('email'),
    }
    constructor(
        private carSV: CartService ,
        private helperSV: HelperService,
        ) {}

        ngOnInit(): void {
        this.OrderDetail();
    }

    OrderDetail() {

        this.listOrders = [];
        this.carSV.getListOrders(this.filter).subscribe((res: any) => {
            this.listOrders = res;
            console.log('res=====',res);
            if (this.listOrders?.length > 0) {
                this.listOrders.forEach((item: IOrder) => {

                    this.carSV.getOrderDetails({
                        idPurchase: item?.id,
                    }).subscribe((response: any) => {
                        item.details = response;
                    });
                });
            }
            console.log(this.listOrders);
        });
    }
}
