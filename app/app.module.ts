/**
 * Created by Peter on 11/1/16.
 */

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AssessmentModule } from './assessment/assessment.module';
import { UserModule } from './user/user.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage.component';

@NgModule({
    imports: [ BrowserModule, HttpModule, AppRoutingModule, AssessmentModule, UserModule ],
    declarations: [ AppComponent, HomepageComponent ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }