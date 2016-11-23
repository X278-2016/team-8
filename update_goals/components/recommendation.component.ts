/**
 * Created by Staya_000 on 11/10/2016.
 */


import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Recommendation } from '../recommendation';

import {RecommendationService} from '../services/recommendationService';

@Component({
    moduleId: module.id,
    selector: 'recommendation',
    templateUrl: '../html/recommendation.component.html',
    providers: [RecommendationService]
})



export class RecommendationComponent implements OnInit {

    title = 'Recommedations';
    recommendations: Recommendation[];
    curRecommendation: Recommendation;

    constructor(private recommendationService: RecommendationService) {}

    getRecommendations(): void {
        this.recommendationService.getRecommendations().then(recommendations => this.recommendations = recommendations);
    }

    ngOnInit() {
        this.getRecommendations();
    }

    onSelect(recommendation: Recommendation): void {
        this.curRecommendation = recommendation;
    }

}