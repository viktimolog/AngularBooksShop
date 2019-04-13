import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
      private afAuth: AngularFireAuth
  ) { }

  login(email: string, password: string) {
      return new Promise((resolve, reject) => {
          this.afAuth.auth.signInWithEmailAndPassword(email, password)
              .then(user => resolve(user))
              .catch(err => reject(err));
      });
  }

    register(email: string, password: string) {
        return new Promise((resolve, reject) => {
            this.afAuth.auth.createUserWithEmailAndPassword(email, password)
                .then(user => resolve(user))
                .catch(err => reject(err));
        });
    }

  checkAuth() {
      return this.afAuth.authState.map(auth => auth);
  }

  logout() {
      return this.afAuth.auth.signOut()
          .then(() => {

          });
  }
}
