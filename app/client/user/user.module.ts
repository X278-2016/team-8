/**
 * Created by Peter on 11/9/16.
 */

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login.component';
import { AuthenticationService } from './authentication.service';

@NgModule({
    imports: [ BrowserModule, FormsModule, UserRoutingModule ],
    exports: [ ],
    declarations: [ LoginComponent ],
    providers: [ AuthenticationService ]
})

export class UserModule { }