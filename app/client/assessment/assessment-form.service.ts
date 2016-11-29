/**
 * Created by Peter on 11/7/16.
 */

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/Rx';

@Injectable()
export class AssessmentFormService{
    constructor(private http: Http) { }

    getQuestions(): Observable<string[]> {
        return this.http.get('http://localhost:3002/api/questions')
            .map((response: Response) => {
                let r = response.json();
                let questions = [];
                for(let i=0; i<r.data.length; i++)
                {
                    questions.push(r.data[i].content);
                }
                return questions;
            });
    }

    sendAnswers(answers): Observable<Response>  {
        return this.http.post('http://localhost:3002/api/recommendations', answers)
            .map((response: Response) => response.json());
    }
}