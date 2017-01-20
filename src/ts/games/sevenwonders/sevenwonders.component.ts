import {Component, ViewContainerRef} from "@angular/core";
import {GameComponent} from "../../base/game.component";
import {DbService} from "../../db.service";
import {GameService} from "../../game.service";

import {SevenWondersGamesheet} from "./sevenwonders.game";
import {DialogsService} from "../../base/dialogs";

@Component({
    selector: "basic-game",
    templateUrl: 'games/sevenwonders/sevenwonders.template.html',
    styleUrls: ['games/sevenwonders/sevenwonders.styles.css']
})
export class SevenWondersGameComponent extends GameComponent {

    public constructor(
        protected dbService: DbService,
        protected gameService: GameService,
        protected dialogsService: DialogsService,
        protected viewContainerRef: ViewContainerRef) {

        super(dbService, gameService, dialogsService, viewContainerRef);
    }

    public onUserLoaded(user: any) {
        if(user.sevenWondersGame) {
            user.sevenWondersGame = new SevenWondersGamesheet(user.sevenWondersGame);
        }
        else {
            user.sevenWondersGame = new SevenWondersGamesheet();
        }

        user.sevenWondersGame.recalculate();
    }

    public onUserReset(user: any) {
        user.sevenWondersGame = new SevenWondersGamesheet();
    }

    public recalculate($event: any, user: any) {
        this.dirty = true;
        user.sevenWondersGame.recalculate();
    }
}