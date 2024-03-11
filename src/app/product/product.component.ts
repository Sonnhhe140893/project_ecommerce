import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  listP: any;
  constructor(private http: HttpClient) {
    this.http
      .get('http://localhost:3000/sanpham', { observe: 'response' })
       .pipe(catchError((res: any)=> res))
      .subscribe((res: any) => {
        console.log('ok=', res.ok);
        console.log('body=', res.body);
        console.log('res=', res);
        console.log('Content-Type=', res.headers.get('Content-Type'));
        this.listP = res.body;
      });
  }
}
