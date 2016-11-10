/**
 * Created by Peter on 11/7/16.
 */

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AssessmentFormComponent } from "./assessment-form.component";
import { AssessmentRoutingModule } from "./assessment-routing.module";
import { AssessmentResultsComponent } from "./assessment-results.component";
import { AssessmentCenterComponent } from "./assessment-center.component";

@NgModule({
    imports: [ BrowserModule, FormsModule, AssessmentRoutingModule ],
    exports: [ ],
    declarations: [ AssessmentCenterComponent, AssessmentFormComponent, AssessmentResultsComponent ]
})

export class AssessmentModule { }