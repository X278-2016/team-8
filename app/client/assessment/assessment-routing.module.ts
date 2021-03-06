/**
 * Created by Peter on 11/7/16.
 */

import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { AssessmentCenterComponent } from "./assessment-center.component";
import { AssessmentFormComponent } from "./assessment-form.component";
import { AssessmentResultsComponent } from "./assessment-results.component";

const routes: Routes = [
    {path: 'assessment', component: AssessmentCenterComponent, children: [
        {path: '', redirectTo: 'form', pathMatch: 'full'},
        {path: 'form', component: AssessmentFormComponent},
        {path: ':id', component: AssessmentResultsComponent}
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AssessmentRoutingModule {}