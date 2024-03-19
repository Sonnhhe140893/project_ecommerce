import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }

/*Lấy data từ local storage*/
  getItems(key: string, type:any = 'obj') {
    let value = localStorage.getItem(key);
    if(type == 'string') return value;
    if(value) return JSON.parse(value);
    return null;
  }

  /*Cập nhật local storage*/
  setItem(key: any, value: any) {
    localStorage.setItem(key, JSON.stringify(value))
  }

  /*Xóa data local storage theo key*/
  deleteItem(key: any) {
    localStorage.removeItem(key);
  }

  /*Xóa tất cả data storage*/
  clearLocalStorage() {
    localStorage.clear();
  }

}
