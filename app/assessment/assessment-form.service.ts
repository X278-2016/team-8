/**
 * Created by Peter on 11/7/16.
 */

import { Injectable } from '@angular/core';

@Injectable()
export class AssessmentFormService{
    getQuestions(): string[] {
        return questions;
    }
    sendAnswers(tempanswers: Number[]): string {
        //Once we implement a back-end this method will send answers to server to be saved in DB
        //and will return username of user for use in retrieving results computed by algorithm
        answers = tempanswers;
        console.log(answers);
        return 'temp';
    }
}

//Mock object for questions to be displayed on assessment-test view
//Will be replaced with RESTful API calls to server once a back-end is implemented
const questions: string[] = ["QUESTION 1", "QUESTION 2", "QUESTION 3", "QUESTION 4", "QUESTION 5", "QUESTION 6"];
var answers: Number[] = [ ];