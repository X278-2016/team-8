/**
 * Created by Staya_000 on 11/10/2016.
 */


import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {recommendationService} from './recommendationService';

@Component({
    moduleId: module.id,
    selector: 'recommendation',
    templateUrl: 'recommendation.component.html',
    providers: [recommendationService]
})



export class RecommendationComponent implements OnInit {
    constructor(private RecommendationService: recommendationService) {}

    // member fields

    recommendations: string[];

    getRecommendations(): void {
        let recommendations = this.recommendationService.getRecommendations();
        this.recommendations = recommendations;
    }


    ngOnInit() {
        this.recommendations = this.recommendationService.getRecommendations();
    }

}