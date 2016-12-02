/**
 * Created by Staya_000 on 11/22/2016.
 */

import { Component, OnInit } from '@angular/core';
import { Goal } from './components/goal';

import {GoalService} from './goalService';

@Component({
    moduleId: module.id,
    selector: 'goal-detail',
    templateUrl: '../html/goal-detail.component.html'
})

export class GoalDetailComponent implements OnInit {

    constructor (
        private goalService: GoalService,
        private route: ActivatedRoute,
        private locaiton: Location
    ) {}


    @Input() goal: Goal;

    // this needs to be implemented for single recommendaiton editing
    ngOnInit(): void {

    }
}

