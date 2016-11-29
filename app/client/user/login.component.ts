import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Angular2TokenService } from 'angular2-token';

import { User } from './user.model';

@Component({
    moduleId: module.id,
    selector: 'my-login',
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    constructor(private router: Router, private _tokenService: Angular2TokenService) { }

    //Member fields
    user: User;

    //Member functions
    login() {
        this._tokenService.signIn({
            email: this.user.email,
            password: this.user.password
        }).subscribe(
            res => {
                console.log(res);
                this.router.navigateByUrl('/assessment');
            },
                    error => console.log(error)
        );
    }

    //Lifecycle methods
    ngOnInit() {
        //Check to see if user is logged in
        if(this._tokenService.userSignedIn())
            this.router.navigateByUrl('/assessment');

        this.user = new User;
    }

}
