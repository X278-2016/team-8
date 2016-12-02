"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by Staya_000 on 11/14/2016.
 */
var core_1 = require("@angular/core");
var recommendationService = (function () {
    function recommendationService() {
    }
    recommendationService.prototype.getRecommendations = function () {
        return recommendations;
    };
    recommendationService = __decorate([
        core_1.Injectable()
    ], recommendationService);
    return recommendationService;
}());
exports.recommendationService = recommendationService;
//Mock object for questions to be displayed on assessment-test view
//Will be replaced with RESTful API calls to server once a back-end is implemented
var recommendations = ["Recommendation 1", "Recomendation 2", "Recomendation 3",
    "Recommendation 4", "Recommendation 5", "Recommendation 6"];
//# sourceMappingURL=goalService.js.map