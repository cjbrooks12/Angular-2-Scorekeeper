import {Component, ViewContainerRef} from "@angular/core";
import {MdDialog, MdDialogRef} from '@angular/material';

import {GameComponent} from "../../base/game.component";
import {DbService} from "../../db.service";
import {GameService} from "../../game.service";
import {TTRGamesheet, TTRUser} from "./ttr.game";
import {DialogsService} from "../../base/dialogs";

@Component({
    selector: "ttr-game",
    templateUrl: 'games/ttr/ttr.template.html',
    styleUrls: ['games/ttr/ttr.styles.css']
})
export class TicketToRideGameComponent extends GameComponent {

    buttonValues: any[];
    defaultScore: number;

    public constructor(
        protected dbService: DbService,
        protected gameService: GameService,
        protected dialogsService: DialogsService,
        protected viewContainerRef: ViewContainerRef) {

        super(dbService, gameService, dialogsService, viewContainerRef);

        this.buttonValues = [
            {name: '1', value: 1},
            {name: '2', value: 2},
            {name: '3', value: 4},
            {name: '4', value: 7},
            {name: '5', value: 10},
            {name: '6', value: 15},
            {name: '9', value: 27}
        ];
    }

    public onUserLoaded(user: any) {
        console.log("Loaded users in TicketToRideGameComponent");
        if (user.ttrGame) {
            user.ttrGame = new TTRGamesheet(user.ttrGame);
        }
        else {
            user.ttrGame = new TTRGamesheet();
        }
    }

    public onUserReset(user: any) {
        user.ttrGame = new TTRGamesheet();
    }

    public addScore(user: TTRUser, value: any) {
        this.dirty = true;
        user.ttrGame.score += value;
    }

    public addBonusPoints(user: TTRUser) {
        this.dialogsService
            .prompt('Prompt Dialog', 'Are you sure you want to do this?', 'number', this.viewContainerRef)
            .subscribe((result) => {
                if(result) {
                    this.addScore(user, result);
                }
            });
    }
}
