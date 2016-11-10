/**
 * Created by Peter on 11/7/16.
 */

import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-homepage',
    template: ` <img src="/app/client/vumc-logo.jpg">
                <nav>
                    <a routerLink="/assessment">Assessment</a> 
                    <a routerLink="/login">Login</a>
                </nav>`
})

export class HomepageComponent {}