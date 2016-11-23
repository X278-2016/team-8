/**
 * Created by Staya_000 on 11/22/2016.
 */

import { Component, OnInit } from '@angular/core';
import { Recommendation } from './components/recommendation';

import {RecommendationService} from './recommendationService';

@Component({
    moduleId: module.id,
    selector: 'recommendation-detail',
    templateUrl: '../html/recommendation-detail.component.html'
})

export class RecommendationDetailComponent implements OnInit {

    constructor (
        private recommendationService: RecommendationService,
        private route: ActivatedRoute,
        private locaiton: Location
    ) {}


    @Input() recommendation: Recommendation;

    // this needs to be implemented for single recommendaiton editing
    ngOnInit(): void {

    }
}

