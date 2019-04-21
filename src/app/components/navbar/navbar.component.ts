import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, Event, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLogin: boolean = false;
  userEmail: string = '';
  isPublic: boolean = false;

  constructor(
      private authService: AuthService,
      private router: Router
  ) { }

  ngOnInit() {
      this.authService.checkAuth().subscribe(auth => {
          if (auth) {
              this.isLogin = true;
              this.userEmail = auth.email;
          } else {
              this.isLogin = false;
          }
      });

      this.router.events.subscribe((e: Event) => {
          if (e instanceof NavigationEnd) {
              // this.isPublic = e.url.indexOf('panel') === -1;
              this.isPublic = !e.url.includes('panel');
          }
      });
  }

  logout() {
      this.authService.logout()
          .then(() => {
              this.isLogin = false;
              this.userEmail = '';
              this.router.navigate(['/login']);
          });
  }
}
