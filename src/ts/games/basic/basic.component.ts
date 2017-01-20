import {Component, ViewContainerRef} from "@angular/core";
import {GameComponent} from "../../base/game.component";
import {DbService} from "../../db.service";
import {GameService} from "../../game.service";

import {BasicGamesheet, BasicUser} from "./basic.game";
import {DialogsService} from "../../base/dialogs";

@Component({
    selector: "basic-game",
    templateUrl: 'games/basic/basic.template.html',
    styleUrls: ['games/basic/basic.styles.css']
})
export class BasicGameComponent extends GameComponent {

    buttonValues: any[];
    defaultScore: number;
    newButtonValue: any;

    public constructor(
        protected dbService: DbService,
        protected gameService: GameService,
        protected dialogsService: DialogsService,
        protected viewContainerRef: ViewContainerRef) {

        super(dbService, gameService, dialogsService, viewContainerRef);
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
        if (user.basicGame) {
            user.basicGame = new BasicGamesheet(user.basicGame);
        }
        else {
            user.basicGame = new BasicGamesheet();
        }
    }

    public onUserReset(user: any) {
        user.basicGame = new BasicGamesheet({score: this.defaultScore});
    }

    public addScore(user: BasicUser, value: number) {
        this.dirty = true;
        user.basicGame.score += value;
    }

    public addButtonvalue() {
        this.buttonValues.push(this.newButtonValue);

        this.newButtonValue = {value: 0};
    }
}