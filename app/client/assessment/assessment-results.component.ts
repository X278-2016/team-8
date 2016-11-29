/**
 * Created by Peter on 11/7/16.
 */

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AssessmentResultsService } from './assessment-results.service';

@Component({
    moduleId: module.id,
    selector: 'my-assessment-results',
    templateUrl: './assessment-results.component.html',
    providers: [AssessmentResultsService]
})

export class AssessmentResultsComponent implements OnInit {
    constructor(private assessmentResultsService: AssessmentResultsService, private router: Router, private route: ActivatedRoute) {}

    //Member fields
    recommendations: string[];

    //Member functions
    getRecommendations(): void {
        let recommendations = this.assessmentResultsService.getRecommendations().subscribe(
            recommendations => {
                this.recommendations = recommendations;
            },
            error => {
                //Do something in case of error
                console.log("Error getting questions "+error);
            }
        );
    }

    //Lifecycle functions
    ngOnInit(): void {
        this.getRecommendations();
    }
}