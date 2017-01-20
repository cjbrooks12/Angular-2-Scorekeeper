import {User} from "../../base/game.component";

export class ClueUser extends User {
    clueGame: ClueGamesheet;
}

export class ClueGamesheet {

    public suspects: string[];
    public weapons: string[];
    public rooms: string[];

    public constructor(savedGame?: any) {

    }
}
