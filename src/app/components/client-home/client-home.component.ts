import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { BasketService } from '../../services/basket.service';
import { Book } from '../../models/Book';

@Component({
  selector: 'app-client-home',
  templateUrl: './client-home.component.html',
  styleUrls: ['./client-home.component.css']
})
export class ClientHomeComponent implements OnInit {
    books: Book[];

  constructor(
      public booksService: BooksService,
      public basketService: BasketService
  ) { }

  ngOnInit() {
      // Get all books
      this.booksService.getBooks().subscribe((books: Book[]) => this.books = books);

      //Clear all items
      this.basketService.clearAllItemsEvent.subscribe(status => {
          if (status) {
              this.books.forEach(book => {
                  book.isAddBasket = false;
              });
          }
      });

      //Delete one item
      this.basketService.deleteItemEvent.subscribe(id => {
          if (id) {
              this.books.find(book => book.id === id).isAddBasket = false;
          }
      });
  }

  addBook(book: Book) {
      const newBasketItem = {
          id: book.id,
          price: book.price,
          name: book.name
      };
      this.basketService.addItem(newBasketItem).subscribe(book => {
          //show message add book to basket success
      });
  }

    deleteBookFromBasket(id) {
        this.basketService.deleteItem(id);
    }
}
