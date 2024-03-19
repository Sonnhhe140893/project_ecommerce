import { NgModule } from '@angular/core';
import { BrowserModule,  } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeControlComponent } from './home-control/home-control.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { ViewProductdetailComponent } from './view-productdetail/view-productdetail.component';
import { CartComponent } from './cart/cart.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { TopSellersProductComponent } from './top-sellers-product/top-sellers-product.component';
import { NewProductComponent } from './new-product/new-product.component';
import { ProductByTypeComponent } from './product-by-type/product-by-type.component';
import { ListProductByTypeComponent } from './list-product-by-type/list-product-by-type.component';
import { SimilarProductComponent } from './similar-product/similar-product.component';
import { CustomerComponent } from './customer/customer.component';
import { UpdatepopupComponent } from './updatepopup/updatepopup.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';






@NgModule({
  declarations: [
    AppComponent,
    HomeControlComponent,
    ProductComponent,
    LoginComponent,
    ViewProductdetailComponent,
    CartComponent,
    PurchaseComponent,
    TopSellersProductComponent,
    NewProductComponent,
    ProductByTypeComponent,
    ListProductByTypeComponent,
    SimilarProductComponent,
    CustomerComponent,
    UpdatepopupComponent,
    RegisterComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),

  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
