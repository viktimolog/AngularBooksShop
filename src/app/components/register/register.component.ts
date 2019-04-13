import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    email: string;
    password: string;

    constructor(
        private authService: AuthService,
        private router: Router,
        public flashMessage: FlashMessagesService
    ) {
    }

    ngOnInit() {
        this.authService.checkAuth().subscribe(auth => {
            if (auth) {
                this.router.navigate(['panel']);
            }
        });
    }

    onSubmit() {
        this.authService.register(this.email, this.password)
            .then(user => {
                console.log({user});
                this.router.navigate(['panel']);
                // show message success
                this.flashMessage.show('Success Registration!', {
                    cssClass: 'alert-success',
                    showCloseBtn: true,
                    closeOnClick: true,
                    timeout: 3000
                });
            })
            .catch(error => {
                console.log({error});
                // show message error
                this.flashMessage.show(error.message, {
                    cssClass: 'alert-danger',
                    showCloseBtn: true,
                    closeOnClick: true,
                    timeout: 5000
                });
            });
    }

}
