import {User} from "../../base/game.component";

export class SevenWondersUser extends User {
    sevenWondersGame: SevenWondersGamesheet;
}

export class SevenWondersGamesheet {
    score: number;

    public military: number;
    public coin: number;
    public wonder: number;
    public civilian: number;
    public commercial: number;
    public guild: number;
    public science: number;

    public constructor(savedGame?: any) {
        this.military   = (savedGame) ? savedGame.military   : 0;
        this.coin       = (savedGame) ? savedGame.coin       : 0;
        this.wonder     = (savedGame) ? savedGame.wonder     : 0;
        this.civilian   = (savedGame) ? savedGame.civilian   : 0;
        this.commercial = (savedGame) ? savedGame.commercial : 0;
        this.guild      = (savedGame) ? savedGame.guild      : 0;
        this.science    = (savedGame) ? savedGame.science    : 0;

        this.recalculate();
    }

    public recalculate() {
        this.score =
              this.military
            + this.coin
            + this.wonder
            + this.civilian
            + this.commercial
            + this.guild
            + this.science;
    }
}
