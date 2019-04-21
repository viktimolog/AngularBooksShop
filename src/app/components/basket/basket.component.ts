import { Component, OnInit } from '@angular/core';
import { BasketService } from '../../services/basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  basketItems = [];

  constructor(
      public basketService: BasketService
  ) { }

  ngOnInit() {
      //get all basket items
      this.basketService.getBasketItems().subscribe(items => {
          this.basketItems = items;
      });
  }

  clearBasket() {
      this.basketService.clearBasket().subscribe(items => {
          this.basketItems = items;
      });
  }

  deleteBasketItem(id){
      this.basketService.deleteItem(id);
  }
}
