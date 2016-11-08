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
var AssessmentResultsService = (function () {
    function AssessmentResultsService() {
    }
    AssessmentResultsService.prototype.getRecommendations = function () {
        return results;
    };
    AssessmentResultsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], AssessmentResultsService);
    return AssessmentResultsService;
}());
exports.AssessmentResultsService = AssessmentResultsService;
//Mock object for recommendations to be displayed on assessment-results view
//Will be replaced with RESTful API calls to server once a back-end is implemented
//Recommendations will be retrieved based off of username of user
//Timeline and learning module will be created and retrieved using username of user as well
var results = ["Recommendation 1", "Recommendation 2", "Recommendation 3", "Recommendation 4", "Recommendation 5"];
//# sourceMappingURL=assessment-results.service.js.map