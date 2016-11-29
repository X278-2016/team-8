/**
 * Created by Peter on 11/1/16.
 */

import { Component } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    template: `<h1>HPV Vaccination Portal</h1>
               <router-outlet></router-outlet>`
})

//Component class is empty as we don't need any application logic
export class AppComponent {
    constructor(private _tokenService: Angular2TokenService){
        this._tokenService.init({apiPath: "http://localhost:3002/api", signInRedirect: '/login'});
    }
}