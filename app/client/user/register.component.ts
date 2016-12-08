/**
 * Created by Tory on 11/10/16.
 */

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Angular2TokenService } from 'angular2-token';


import { User } from './user.model';



@Component({
    moduleId: module.id,
    selector: 'my-register',
    templateUrl: 'register.component.html'
})

export class RegisterComponent implements OnInit {
    user: User;

    constructor( private router: Router, private _tokenService: Angular2TokenService ) {};

    register() {
        this._tokenService.request({
            method: 'POST',
            url: 'http://localhost:3002/api/auth',
            body: {
            email: this.user.email,
            password: this.user.password,
            password_confirmation: this.user.passwordConfirmation,
            name: this.user.name,
            clinic: this.user.clinic
        }}).subscribe(
            res => {
                console.log(res);
                this.router.navigateByUrl('/assessment');
            },
            error => console.log(error)
        );
    }

    //Lifecycle methods
    ngOnInit() {
        // create new user field
        this.user = new User;
    }
}