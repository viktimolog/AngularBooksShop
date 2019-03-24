import { Component, OnInit } from '@angular/core';
import { BooksService } from "../../services/books.service";
import { IdService } from "../../services/id.service";
import { Book } from "../../models/Book";
import { ActivatedRoute, Router } from "@angular/router";

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
        public router: Router
    ) { }

  ngOnInit() {
      this.bookId = this.idService.generate();

      this.book = {
          id: this.bookId,
          name: '',
          author: '',
          description: '',
          link: [
              {
                  type: 'epub',
                  link: ''
              },
              {
                  type: 'pdf',
                  link: ''
              }
          ]
      }
  }

  addBook(){

        console.log({
            book: this.book
        });

      // const updatedBook = {...this.book};
      // this.booksService.editBook(updatedBook).subscribe((book: Book) => {
      //     if(book){
      //         //Here will be success message
      //         this.router.navigate(['/panel']);
      //     }
      // })

  }
}
