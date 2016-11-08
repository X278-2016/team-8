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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var assessment_form_component_1 = require("./assessment-form.component");
var assessment_routing_module_1 = require("./assessment-routing.module");
var assessment_results_component_1 = require("./assessment-results.component");
var assessment_center_component_1 = require("./assessment-center.component");
var AssessmentModule = (function () {
    function AssessmentModule() {
    }
    AssessmentModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, assessment_routing_module_1.AssessmentRoutingModule],
            exports: [],
            declarations: [assessment_center_component_1.AssessmentCenterComponent, assessment_form_component_1.AssessmentFormComponent, assessment_results_component_1.AssessmentResultsComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AssessmentModule);
    return AssessmentModule;
}());
exports.AssessmentModule = AssessmentModule;
//# sourceMappingURL=assessment.module.js.map