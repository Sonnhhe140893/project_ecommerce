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
import { OrderdetailComponent } from './orderdetail/orderdetail.component';
import { SearchComponent } from './search/search.component';
import { LogoutComponent } from './logout/logout.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';

const routes: Routes = [
  { path: '', component: HomeControlComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeControlComponent },
  { path: 'product', component: ProductComponent },
  { path: 'product/:id', component: ViewProductdetailComponent },
  { path: 'producttype/:id', component: ListProductByTypeComponent },
  { path: 'cart', component: CartComponent },
  { path: 'order', component: OrderdetailComponent },
  { path: 'purchase', component: PurchaseComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'user', component: UserComponent },
  {path : 'updateuser/:id/edit', component:UpdateuserComponent },
  { path: 'search', component:SearchComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}





  /* Sao lại đặt route như này, biết cái cpn search nó làm gì ko, nó chỉ chứa form search chứ kp trang web mà đặt route
   Cách 2, tạo 1 component searchProduct chứa design na ná màn home chứa các item đã search được, dùng queryParam để getProduct,
   Truyền lên url các param và value tương ứng khi nhấn search
   Component searchProduct kia thì lấy  queryParam trên  url và gọi list tương ứng thì sẽ ra
   Muốn biết thì search chat gpt hoặc gg : ví dụ: cách lấy queryParam trên url angular (example),
   xem và hiểu, đấy toàn phần quan trọng thôi, tối thiểu để còn thực tập hoặc làm được
   */
