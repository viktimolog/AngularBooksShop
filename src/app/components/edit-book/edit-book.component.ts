import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from '../../services/books.service';
import { Book } from '../../models/Book';
import { FlashMessagesService } from 'angular2-flash-messages';

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
      public router: Router,
      public flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
      //Get current book
      this.bookId = this.activatedRoute.snapshot.params.id;
      this.booksService.getBookById(this.bookId).subscribe((book: Book) => this.book = book);
  }

  editBook() {
    const updatedBook = {...this.book};
    this.booksService.editBook(updatedBook).subscribe(promise => {
        promise.then(res => {
            //Here is success message
            this.flashMessage.show('The book has been edited!', {
                cssClass: 'alert-success',
                showCloseBtn: true,
                closeOnClick: true,
                timeout: 3000
            });
            this.router.navigate(['/panel']);
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
}
