import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { IdService } from '../../services/id.service';
import { Book } from '../../models/Book';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
    bookId: string;
    book: Book;
    constructor(
        public booksService: BooksService,
        public idService: IdService,
        public activatedRoute: ActivatedRoute,
        public router: Router,
        public flashMessage: FlashMessagesService
    ) { }

  ngOnInit() {
      this.bookId = this.idService.generate();

      this.book = {
          id: this.bookId,
          price: null,
          date: '',
          name: '',
          author: '',
          description: '',
          links: [
              {
                  type: 'epub',
                  link: ''
              },
              {
                  type: 'pdf',
                  link: ''
              }
          ]
      };
  }

  addBook() {
      this.booksService.addBook(this.book).subscribe(promise => {
          promise.then(res => {
              if (res.id) {
                  //Here is success message
                  this.flashMessage.show('The book has been added!', {
                      cssClass: 'alert-success',
                      showCloseBtn: true,
                      closeOnClick: true,
                      timeout: 3000
                  });
                  this.router.navigate(['/panel']);
              }
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
