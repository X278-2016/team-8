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
var assessment_form_service_1 = require('./assessment-form.service');
var AssessmentFormComponent = (function () {
    function AssessmentFormComponent(assessmentFormService, router, route) {
        this.assessmentFormService = assessmentFormService;
        this.router = router;
        this.route = route;
    }
    //Member functions
    AssessmentFormComponent.prototype.getQuestions = function () {
        var questions = this.assessmentFormService.getQuestions();
        this.questions = questions;
    };
    AssessmentFormComponent.prototype.submitForm = function () {
        console.log(this.answers);
        if (this.answers.indexOf(-1) != -1) {
            alert('Please select an answer for every questions');
            return;
        }
        var id = this.assessmentFormService.sendAnswers(this.answers);
        this.router.navigate(['../' + id], { relativeTo: this.route });
    };
    //Lifecycle functions
    AssessmentFormComponent.prototype.ngOnInit = function () {
        this.getQuestions();
        this.answers = [];
        for (var question in this.questions) {
            this.answers.push(-1);
        }
    };
    AssessmentFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-assessment-form',
            templateUrl: 'assessment-form.component.html',
            providers: [assessment_form_service_1.AssessmentFormService]
        }), 
        __metadata('design:paramtypes', [assessment_form_service_1.AssessmentFormService, router_1.Router, router_1.ActivatedRoute])
    ], AssessmentFormComponent);
    return AssessmentFormComponent;
}());
exports.AssessmentFormComponent = AssessmentFormComponent;
//# sourceMappingURL=assessment-form.component.js.map