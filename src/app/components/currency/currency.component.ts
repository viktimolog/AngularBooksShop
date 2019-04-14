import { Component, OnInit } from '@angular/core';
import { Currency } from '../../models/Currency';
import { CurrencyService } from '../../services/currency.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {
    selectedCurrency: Currency;
    currentCurrencyList: Currency[];

  constructor(
      private currencyService: CurrencyService
  ) { }

  ngOnInit() {
      this.currencyService.selectedCurrency.subscribe(data => {
          this.currentCurrencyList = data.slice();
          this.selectedCurrency = {...data.find(item => item.isActive === true)};
      });
  }

  updateCurrency() {
    this.currencyService.selectCurrency(this.selectedCurrency.name);
  }
}
