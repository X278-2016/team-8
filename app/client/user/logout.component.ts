/**
 * Created by Peter on 11/28/16.
 */

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Angular2TokenService } from 'angular2-token';

@Component({
    moduleId: module.id,
    selector: 'my-logout',
    template: '<div></div>'
})


export class LogoutComponent implements OnInit {
    constructor(private router: Router, private _tokenService: Angular2TokenService) { }

    //Member functions
    logout() {
        this._tokenService.signOut().subscribe(
            res => {
                console.log(res);
                this.router.navigateByUrl('/');
            },
            error => {
                console.log(error);
                this.router.navigateByUrl('/');
            }
        );
    }

    //Lifecycle methods
    ngOnInit() {
        this.logout();
    }

}