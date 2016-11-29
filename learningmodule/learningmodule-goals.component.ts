/**
 * Created by Tory on 11/28/16.
 */

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { LearningModuleService } from './learningmodule-goals.service';

@Component({
    moduleId: module.id,
    selector: 'my-learningmodule-goals',
    templateUrl: './learningmodule-goals.component.html',
    providers: [LearningModuleService]
})

export class LearningModuleGoalsComponent implements OnInit {
    constructor(private learningModuleService: LearningModuleService,
    private router: Router, private route: ActivatedRoute) {}

    //Member fields
    goals : string[];

    //Member functions
    getGoals(): void {
        let goals = this.learningModuleService.getGoals();
        this.goals = goals;
    }

    updateGoals(): void {
        let goals = this.learningModuleService.updateGoals();
        this.goals = goals;
    }

    ngOnInit() : void {
        this.getGoals();
    }
}