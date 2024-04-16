import { Component } from '@angular/core';

@Component({
    selector: 'app-home-control',
    templateUrl: './home-control.component.html',
    styleUrl: './home-control.component.scss',
})
export class HomeControlComponent {
    //C1
    /* : Tạo biến search ở component home --> truyền  sang các component con kia (truyền cha-con)
            + cpn search: dùng chính biến search đó nhận được từ thằng cha, cho vào ngModel ở form input
            Khi nhấn search thì emit data ra thằng cha
            + Bên cpn List kia dùng ngOnChange gọi lại danh sách sản phẩm với tham số truyền vào là giá trị biến search được hứng từ cpn cha
    */
    search: string = '';
    // searchList: IProduct[] = [];

    // searchForm: any = {
    //     name: null,
    //     giatien: null,
    // }

    ngOnInit() {}

    handleSearch(res: any) {
    this.search= res;

    }
}
