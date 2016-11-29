/**
 * Created by Peter on 11/7/16.
 */

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Angular2TokenService } from 'angular2-token';

@Component({
    moduleId: module.id,
    selector: 'my-homepage',
    template: ` <img src="/app/client/vumc-logo.jpg">
                <nav>
                    <a routerLink="/assessment">Assessment</a> 
                    <a *ngIf="!this._tokenService.userSignedIn()" routerLink="/login">Login</a>
                    <a *ngIf="!this._tokenService.userSignedIn()" routerLink="/register">Register</a>
                    <a *ngIf="this._tokenService.userSignedIn()" routerLink="/logout">Logout</a>
                </nav>`
})

export class HomepageComponent {
    constructor(private router: Router, private _tokenService: Angular2TokenService) { }
}