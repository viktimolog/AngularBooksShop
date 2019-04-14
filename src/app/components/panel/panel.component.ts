import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { Book } from '../../models/Book';
import { CurrencyService } from '../../services/currency.service';
import { Currency } from '../../models/Currency';

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
      public currencyService: CurrencyService
  ) { }

  ngOnInit() {
      //Get all books
      this.booksService.getBooks().subscribe((books: Book[]) => this.books = books);
      //Subscribe currency update
      this.currencyService.selectedCurrency.subscribe(data => {
          this.currentCurrency = {...data.find(item => item.isActive === true)};
      });
  }

  // deleteBook(id: string) {
  //     this.booksService.deleteBook(id).subscribe((books: Book[]) => this.books = books);
  // }

  searchBook() {
      this.searchingResult = this.books.filter((book: Book) => book.name.toLowerCase().indexOf(this.searchText) !== -1);
      console.log({searchingResult: this.searchingResult});
  }
}
