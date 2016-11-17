/**
 * Created by Staya_000 on 11/14/2016.
 */
import { Injectable } from "@angular/core";

@Injectable()
export class recommendationService{
    getRecommendations(): string[] {
        return recommendations;
    }

}

//Mock object for questions to be displayed on assessment-test view
//Will be replaced with RESTful API calls to server once a back-end is implemented
const recommendations: string[] = ["Recommendation 1", "Recomendation 2", "Recomendation 3",
    "Recommendation 4", "Recommendation 5", "Recommendation 6"];
