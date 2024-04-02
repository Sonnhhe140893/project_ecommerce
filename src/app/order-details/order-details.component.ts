import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';
import { AuthenticationService } from '../service/authentication.service';
import { HelperService } from '../service/common/helper.service';
import { IOrder } from '../interface/order.interface';
@Component({
    selector: 'app-order-details',
    templateUrl: './order-details.component.html',
    styleUrl: './order-details.component.scss',
})
export class OrderDetailsComponent {
    listOrders: IOrder[] = [];

    constructor(
        private CartSV: CartService,
        private AuthenSV: AuthenticationService,
        private HelperService: HelperService
    ) {}

    ngOnInit(): void {
        this.purchasedProducts();
    }

    purchasedProducts() {
        this.listOrders = [];
        this.CartSV.getListOrders().subscribe((res: any) => {
            this.listOrders = res;
            if (this.listOrders?.length > 0) {
                this.listOrders.forEach((item: IOrder) => {
                    this.CartSV.getOrderDetails({
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
