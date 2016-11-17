/**
 * Created by Tory on 11/10/16.
 */

import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './authentication.service';



@Component({
    moduleId: module.id,
    templateUrl: 'register.component.html'
})

export class RegisterComponent {
    model: any = {};
    loading = false;

    constructor(
        private router: Router,
        //still need to create a user service to handle logic of adding users to the user model
        private authenticationService: AuthenticationService,
        ) { }

    register() {
        this.loading = true;
        this.authenticationService.create(this.model)
            .subscribe(
                data => {
                    //navigate to login page
                    this.router.navigate(['/login']);
                },
                error => {
                    //don't load this user into user model
                    this.loading = false;
                });
    }
}