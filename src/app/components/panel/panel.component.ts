import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { Book } from '../../models/Book';
import { CurrencyService } from '../../services/currency.service';
import { Currency } from '../../models/Currency';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
    books: Book[];
    searchText: string;
    searchingResult: Book[] = [];
    currentCurrency: Currency;

  constructor(
      public booksService: BooksService,
      public currencyService: CurrencyService,
      public flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
      //Get all books
      this.booksService.getBooks().subscribe((books: Book[]) => this.books = books);
      //Subscribe currency update
      this.currencyService.selectedCurrency.subscribe(data => {
          this.currentCurrency = {...data.find(item => item.isActive === true)};
      });
  }

  deleteBook(id: string) {
      this.booksService.deleteBook(id).subscribe(promise => {
          promise.then(res => {
              //Here is success message
              this.flashMessage.show('The book has been deleted!', {
                  cssClass: 'alert-success',
                  showCloseBtn: true,
                  closeOnClick: true,
                  timeout: 3000
              });
          })
              .catch(error => {
                  //Here is error message
                  this.flashMessage.show(error.message, {
                      cssClass: 'alert-danger',
                      showCloseBtn: true,
                      closeOnClick: true,
                      timeout: 5000
                  });
              });
      });
  }

  searchBook() {
      this.searchingResult = this.books.filter((book: Book) => book.name.toLowerCase().indexOf(this.searchText) !== -1);
  }
}
