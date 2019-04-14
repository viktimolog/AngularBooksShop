import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { Book } from '../../models/Book';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
    books: Book[];
    searchText: string;
    searchingResult: Book[] = [];

  constructor(
      public booksService: BooksService
  ) { }

  ngOnInit() {
      //Get all books
      this.booksService.getBooks().subscribe((books: Book[]) => this.books = books);
  }

  // deleteBook(id: string) {
  //     this.booksService.deleteBook(id).subscribe((books: Book[]) => this.books = books);
  // }

  searchBook() {
      this.searchingResult = this.books.filter((book: Book) => book.name.toLowerCase().indexOf(this.searchText) !== -1);
      console.log({searchingResult: this.searchingResult});
  }
}
