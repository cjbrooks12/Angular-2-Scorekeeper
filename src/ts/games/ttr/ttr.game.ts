import {User} from "../../base/game.component";

export class TTRUser extends User {
    ttrGame: TTRGamesheet;
}

export class TTRGamesheet {
    score: number;

    public constructor(savedGame?: any) {
        this.score = (savedGame) ? savedGame.score : 0;
    }
}
