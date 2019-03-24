import { Injectable } from '@angular/core';
import { of } from "rxjs/internal/observable/of";

import { Book } from "../models/Book";

@Injectable()
export class BooksService {
    books: Book[] = [
        {
            id: '71e9a',
            name: 'Выразительный JavaScript',
            author: 'Marijn Haverbeke',
            description: 'lorem lorem',
            link: [
                {
                    type: 'epub',
                    link: 'link'
                },
                {
                    type: 'pdf',
                    link: 'link'
                }
            ]
        }
    ];

  constructor() { }

  getBooks(){
      return of(this.books);

  }

  getBookById(id: string){

  }

  addBook(book: Book){

  }

  editBook(book: Book){

  }

  deleteBook(id: string){

  }
}
