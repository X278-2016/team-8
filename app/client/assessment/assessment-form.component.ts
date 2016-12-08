/**
 * Created by Peter on 11/7/16.
 */

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {AssessmentFormService} from './assessment-form.service';

@Component({
    moduleId: module.id,
    selector: 'my-assessment-form',
    templateUrl: 'assessment-form.component.html',
    providers: [AssessmentFormService]
})

export class AssessmentFormComponent implements OnInit{
    constructor(private assessmentFormService: AssessmentFormService, private router: Router, private route: ActivatedRoute) {}

    //Member fields
    questions: string[];
    answers: Number[];
    followups: Number[];

    //Member functions
    getQuestions(): void {
        this.assessmentFormService.getQuestions().subscribe(
            questions => {
                this.questions = questions;
                this.answers = [ ];
                this.followups = [ ];
                for (let question in this.questions){
                    this.answers.push(-1);
                    this.followups.push(-1);
                }
            },
            error => {
                //Do something in case of error
                console.log("Error getting questions "+error);
            }
        );
    }
    submitForm(): void{
        console.log(this.answers);
        if(this.answers.indexOf(-1)!=-1){
            alert('Please select an answer for every question');
            return;
        }
        let combined_answers = [];
        for(let i=0; i<this.answers.length; i++){
            combined_answers.push(this.answers[i]);
            combined_answers.push(this.followups[i]);
        }
        this.assessmentFormService.sendAnswers(combined_answers).subscribe(
            () => {
            let username = "test";
            this.router.navigate(['../'+username], {relativeTo: this.route});
        },
        error => {
            //Do something in case of error
            console.log("Error submitting answers"+error)
        }
        );
    }

    //Lifecycle functions
    ngOnInit(): void {
        this.getQuestions();
    }
}