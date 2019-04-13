import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authService: AuthService,
        private afAuth: AngularFireAuth
    ) {}

  canActivate(): Observable<boolean> {
      return this.afAuth.authState.map(auth => {
          if (!auth) {
              this.router.navigate(['/login'])
              return false;
          } else {
              return true;
          }
      });
  }
}
