/**
 * Created by Tory on 11/28/16.
 */

import {Injectable} from '@angular/core';

@Injectable()
export class LearningModuleService {
    getGoals(): string[] {
        return goals;
    }
    updateGoals(): string[] {
        return goals;
    }


}
//Will change these to not be constant strings and instead will have to check
//if any of the goals have been completed and then alter the list of goals
const goals : string[] = ["Goal #1", "Goal #2", "Goal #3"];