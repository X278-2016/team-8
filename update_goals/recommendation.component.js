/**
 * Created by Staya_000 on 11/10/2016.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var recommendationService_1 = require('./recommendationService');
var RecommendationComponent = (function () {
    function RecommendationComponent(RecommendationService) {
        this.RecommendationService = RecommendationService;
    }
    RecommendationComponent.prototype.getRecommendations = function () {
        var recommendations = this.recommendationService.getRecommendations();
        this.recommendations = recommendations;
    };
    RecommendationComponent.prototype.ngOnInit = function () {
        this.recommendations = this.recommendationService.getRecommendations();
    };
    RecommendationComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'recommendation',
            templateUrl: 'recommendation.component.html',
            providers: [recommendationService_1.recommendationService]
        })
    ], RecommendationComponent);
    return RecommendationComponent;
}());
exports.RecommendationComponent = RecommendationComponent;
//# sourceMappingURL=recommendation.component.js.map