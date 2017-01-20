import {User} from "../../base/users.component";

export class BasicUser extends User {
    basicGame: BasicGamesheet;
}

export class BasicGamesheet {
    score: number;

    public constructor(defaultScore?: number) {
        if(defaultScore) {
            this.score = defaultScore;
        }
        else {
            this.score = 0;
        }
    }
}
