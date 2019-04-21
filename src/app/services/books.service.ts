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
    book: Observable<Book>;

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
        this.bookDocument = this.afs.doc<Book>(`books/${id}`);
        this.book = this.bookDocument.valueChanges();
        return this.book;
    }

    addBook(book: Book) {
        return of(this.booksCollection.add(book));
    }

    deleteBook(id: string) {
        return of(this.afs.doc(`books/${id}`).delete());
    }

    editBook(book: Book) {
        return of(this.bookDocument.update(book));
    }
}
