import { Component, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { logging } from 'protractor';

import { UserOptions } from '../../interfaces/user-options';
import { UserData } from '../../providers/user-data';
//Import GPS Below


@Component({
    selector: 'page-login',
    templateUrl: 'add loginpage here.html',
    styleUrls: ['./loggin.scss'],
})
export class LoginPage {
    login: UserOptions = {username: '', password: ' '};
    submitted = false;

    constructor(
        public userData: UserData,
        public router: Router
    ) {}

    onLogin(form: NgForm) {
        this.submitted = true;

        if (form.valid) {
            this.userData.login(this.login.username);
            this.router.navigateByUrl('/app/openGPS Page') //TODO
        }
    }

    onSignup() {
        this.router.navigateByUrl('/signup')
    }
}