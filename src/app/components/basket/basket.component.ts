import { Component, OnInit } from '@angular/core';
import { BasketService } from '../../services/basket.service';
import { Book } from '../../models/Book';

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
}
