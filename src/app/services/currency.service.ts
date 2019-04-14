import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Currency } from '../models/Currency';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  currency = [
      {
          name: 'USD',
          isActive: true,
          coefficient: 1
      },
      {
          name: 'EUR',
          isActive: false,
          coefficient: 0.75
      },
      {
          name: 'GBP',
          isActive: false,
          coefficient: 0.6
      }
  ];

  private currencySource = new BehaviorSubject<Currency[]>(this.currency);
  selectedCurrency = this.currencySource.asObservable();

  constructor() { }

  selectCurrency(name: string) {

      console.log({name});

      this.currency = this.currency.map((currency: Currency) => {
          currency.isActive = currency.name === name;
          return currency;
      });
      console.log({currency: this.currency});
      this.currencySource.next(this.currency);
  }
}
