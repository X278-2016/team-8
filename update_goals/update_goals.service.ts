/**
 * Created by Staya_000 on 11/10/2016.
 */


export class RecommendationService {
    private recommendationss: Recommendations[] = [];

    constructor(
        private backend: BackendService

    getHeroes() {
        this.backend.getAll(Recommendation).then( (recommendations: Recommendations[]) => {
            this.heroes.push(...heroes); // fill cache
        });
        return this.heroes;
    }
}