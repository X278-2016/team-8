/**
 * Created by Peter on 11/7/16.
 */

import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'

import {HomepageComponent} from "./homepage.component";

const routes: Routes = [
    {path: '', redirectTo: '/homepage', pathMatch: 'full'},
    {path: 'homepage', component: HomepageComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}