/**
 * Created by Peter on 11/7/16.
 */

import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-homepage',
    template: ` <img src="/app/vumc-logo.jpg">
                <nav>
                    <a routerLink="/assessment">Assessment</a> 
                </nav>`
})

export class HomepageComponent {}