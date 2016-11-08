/**
 * Created by Peter on 11/7/16.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var assessment_center_component_1 = require("./assessment-center.component");
var assessment_form_component_1 = require("./assessment-form.component");
var assessment_results_component_1 = require("./assessment-results.component");
var routes = [
    { path: 'assessment', component: assessment_center_component_1.AssessmentCenterComponent, children: [
            { path: '', redirectTo: 'form', pathMatch: 'full' },
            { path: 'form', component: assessment_form_component_1.AssessmentFormComponent },
            { path: ':id', component: assessment_results_component_1.AssessmentResultsComponent }
        ] }
];
var AssessmentRoutingModule = (function () {
    function AssessmentRoutingModule() {
    }
    AssessmentRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], AssessmentRoutingModule);
    return AssessmentRoutingModule;
}());
exports.AssessmentRoutingModule = AssessmentRoutingModule;
//# sourceMappingURL=assessment-routing.module.js.map