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
var AssessmentFormService = (function () {
    function AssessmentFormService() {
    }
    AssessmentFormService.prototype.getQuestions = function () {
        return questions;
    };
    AssessmentFormService.prototype.sendAnswers = function (tempanswers) {
        //Once we implement a back-end this method will send answers to server to be saved in DB
        //and will return username of user for use in retrieving results computed by algorithm
        answers = tempanswers;
        console.log(answers);
        return 'temp';
    };
    AssessmentFormService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], AssessmentFormService);
    return AssessmentFormService;
}());
exports.AssessmentFormService = AssessmentFormService;
//Mock object for questions to be displayed on assessment-test view
//Will be replaced with RESTful API calls to server once a back-end is implemented
var questions = ["QUESTION 1", "QUESTION 2", "QUESTION 3", "QUESTION 4", "QUESTION 5", "QUESTION 6"];
var answers = [];
//# sourceMappingURL=assessment-form.service.js.map