import {User} from "../../base/game.component";

export class BasicUser extends User {
    basicGame: BasicGamesheet;
}

export class BasicGamesheet {
    score: number;

    public constructor(savedGame?: any) {
        this.score = (savedGame) ? savedGame.score : 0;
    }
}
