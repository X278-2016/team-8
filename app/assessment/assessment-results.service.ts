/**
 * Created by Peter on 11/7/16.
 */

import { Injectable } from '@angular/core';

@Injectable()
export class AssessmentResultsService{
    getRecommendations(): string[] {
        return results;
    }
}

//Mock object for recommendations to be displayed on assessment-results view
//Will be replaced with RESTful API calls to server once a back-end is implemented
//Recommendations will be retrieved based off of username of user
//Timeline and learning module will be created and retrieved using username of user as well
const results: string[] = ["Recommendation 1", "Recommendation 2", "Recommendation 3", "Recommendation 4", "Recommendation 5"];