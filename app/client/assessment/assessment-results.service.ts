/**
 * Created by Peter on 11/7/16.
 */

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/Rx';

@Injectable()
export class AssessmentResultsService{
    constructor(private http: Http) { }

    getRecommendations(): Observable<string[]> {
        return this.http.get('http://localhost:3002/api/recommendations')
            .map((response: Response) => {
                let r = response.json();
                let answers = [];
                for(let i=0; i<r.data.length; i++)
                {
                    answers.push(r.data[i].content);
                }
                return answers;
            });
    }
}