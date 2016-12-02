/**
 * Created by Staya_000 on 11/10/2016.
 */


import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Recommendation } from '../goal';

import {GoalService} from '../services/goalService';

@Component({
    moduleId: module.id,
    selector: 'goal',
    templateUrl: '../html/goal.component.html',
    providers: [GoalService]
})



export class GoalComponent implements OnInit {

    title = 'Goals';
    goals: Goal[];
    curGoal: Goal;

    constructor(private goalService: GoalService) {}

    getGoals(): void {
        this.goalService.getGoals().then(goals => this.goals = goals);
    }

    ngOnInit() {
        this.getGoals();
    }

    onSelect(goal: Goal): void {
        this.curGoal = goal;
    }

}