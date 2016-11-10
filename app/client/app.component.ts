/**
 * Created by Peter on 11/1/16.
 */

import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    template: `<h1>HPV Vaccination Portal</h1>
               <router-outlet></router-outlet>`
})

//Component class is empty as we don't need any application logic
export class AppComponent {}