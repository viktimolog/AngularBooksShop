import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from '../../services/books.service';
import { Book } from '../../models/Book';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
    bookId: string;
    book: Book;
  constructor(
      public booksService: BooksService,
      public activatedRoute: ActivatedRoute,
      public router: Router
  ) { }

  ngOnInit() {
      // this.bookId = this.activatedRoute.snapshot.params.id;
      // this.booksService.getBookById(this.bookId).subscribe((book: Book) => {
      //       this.book = book;
      // });
  }

  // editBook() {
  //   const updatedBook = {...this.book};
  //   this.booksService.editBook(updatedBook).subscribe((book: Book) => {
  //       if (book) {
  //           //Here will be success message
  //           this.router.navigate(['/panel']);
  //       }
  //   });
  // }
}
