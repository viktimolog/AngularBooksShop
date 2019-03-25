import { Injectable } from '@angular/core';
import { of } from 'rxjs/internal/observable/of';

import { Book } from '../models/Book';
import { BehaviorSubject } from 'rxjs';

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

    // Add new book
    private bookSource = new BehaviorSubject<Book>({
        id: '',
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
    });

    newBook = this.bookSource.asObservable();

    constructor() { }

    getBooks() {
        return of(this.books);

    }

    getBookById(id: string) {
        const book = this.books.find(item => item.id === id);
        return of(book);
    }

    addBook(book: Book) {
        this.books.unshift(book);
        return of(this.books);
    }

    editBook(book: Book) {
        this.books = this.books.map(item => {
           if (item.id === book.id){
               item = book;
           }
           return item;
        });
        return of(book);
    }

    deleteBook(id: string) {

    }
}
