/**
 * Created by Staya_000 on 11/14/2016.
 */
import { Injectable } from "@angular/core";

import { Goal } from '../goal'
import { GOALS } from '../components/list-goal'


@Injectable()
export class GoalService{
    getGoals(): Promise<Goal[]> {
        return Promise.resolve(GOALS);
    }

    getGoal(number: number): Promise<Goal> {
        return this.getGoals()
            .then(goals => goals.find(goal => goal.number === number))
    }

}

