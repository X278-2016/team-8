/**
 * Created by Peter on 11/1/16.
 */

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AssessmentModule } from "./assessment/assessment.module";
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage.component';

@NgModule({
    imports: [ BrowserModule, AppRoutingModule, AssessmentModule ],
    declarations: [ AppComponent, HomepageComponent ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }