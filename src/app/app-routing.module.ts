import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeControlComponent } from './home-control/home-control.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { ViewProductdetailComponent } from './view-productdetail/view-productdetail.component';
import { ListProductByTypeComponent } from './list-product-by-type/list-product-by-type.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from './guard/auth.guard';
import { OrderDetailsComponent } from './order-details/order-details.component';

const routes: Routes = [
  { path: '', component: HomeControlComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeControlComponent },
  { path: 'product', component: ProductComponent },
  { path: 'product/:id', component: ViewProductdetailComponent },
  { path: 'producttype/:id', component: ListProductByTypeComponent },
  { path: 'cart', component: CartComponent },
  { path: 'order', component: OrderDetailsComponent },
  { path: 'purchase', component: PurchaseComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'user', component: UserComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
