import { Injectable } from '@angular/core';
import { Book } from '../models/Book';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
    purchaseList: Book[] = [];

  constructor() { }

  getBasketItems() {
      return of(this.purchaseList);
  }

  addItem(book) {
      this.purchaseList.push(book);
      return of(book);
  }

  deleteItem(id) {
      //delete item
      for(let i = 0; i < this.purchaseList.length; i++){
          if(this.purchaseList[i].id === id){
              this.purchaseList.splice(i, 1);
              break;
          }
      }
  }
}
