/**
 * Created by Staya_000 on 11/14/2016.
 */
import { Injectable } from "@angular/core";

import { Recommendation } from '../recommendation'
import { RECOMMENDATIONS } from '../components/list-recommendations'


@Injectable()
export class RecommendationService{
    getRecommendations(): Promise<Recommendation[]> {
        return Promise.resolve(RECOMMENDATIONS);
    }

    getRecommendation(number: number): Promise<Recommendation> {
        return this.getRecommendations()
            .then(recommendations => recommendations.find(recommendation => recomendation.number === number))
    }

}

