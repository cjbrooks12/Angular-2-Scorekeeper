import {Component} from "@angular/core";
import {GameComponent} from "../../base/users.component";
import {DbService} from "../../db.service";
import {GameService} from "../../game.service";

import {BasicGamesheet, BasicUser} from "./basicGame";

@Component({
    selector: "basic-game",
    templateUrl: 'games/basic/basic.template.html',
    styleUrls: ['games/basic/basic.styles.css']
})
export class BasicGameComponent extends GameComponent {

    buttonValues: any[];
    defaultScore: number;
    newButtonValue: any;

    public constructor(dbService: DbService, protected gameService: GameService) {
        super(dbService, gameService);
        this.newButtonValue = {
            value: 0
        };

        this.buttonValues = [
            {value: 1},
            {value: 5},
            {value: 10},
            {value: 25},
            {value: 50}
        ];
    }

    public onUserLoaded(user: any) {
        if(!user.basicGame) {
            user.basicGame = new BasicGamesheet();
        }
    }

    public onUserReset(user: any) {
        user.basicGame = new BasicGamesheet(this.defaultScore);
    }

    public addScore(user: BasicUser, value: number) {
        this.dirty = true;
        user.basicGame.score += value;
    }

    public addButtonvalue() {
        this.buttonValues.push(this.newButtonValue);

        this.newButtonValue = { value: 0 };
    }
}