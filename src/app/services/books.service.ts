import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
    AngularFirestore,
    AngularFirestoreCollection,
    AngularFirestoreDocument
} from 'angularfire2/firestore';
import { Book } from '../models/Book';


@Injectable()
export class BooksService {
    booksCollection: AngularFirestoreCollection<Book>;
    bookDocument: AngularFirestoreDocument<Book>;
    books: Observable<Book[]>;

    constructor(
        private afs: AngularFirestore
    ) {
        this.booksCollection = this.afs.collection('books');
    }

    getBooks() {
        this.books = this.booksCollection.snapshotChanges().map(
            collection => {
                return collection.map(document => {
                   const data = document.payload.doc.data() as Book;
                   data.id = document.payload.doc.id;
                   return data;
                });
            }
        );
        return this.books;
    }

    getBookById(id: string) {

    }

    addBook(book: Book) {
        this.books.unshift(book);
        return of(this.books);
    }

    editBook(book: Book) {
        this.books = this.books.map(item => {
           if (item.id === book.id) {
               item = book;
           }
           return item;
        });
        return of(book);
    }

    deleteBook(id: string) {
        return of(this.books.filter(item => item.id !== id));
    }
}
