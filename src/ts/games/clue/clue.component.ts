import {Component, ViewContainerRef} from "@angular/core";
import {GameComponent} from "../../base/game.component";
import {DbService} from "../../db.service";
import {GameService} from "../../game.service";

import {ClueGamesheet, ClueUser} from "./clue.game";
import {DialogsService} from "../../base/dialogs";

@Component({
    selector: "clue-game",
    templateUrl: 'games/clue/clue.template.html',
    styleUrls: ['games/clue/clue.styles.css']
})
export class ClueGameComponent extends GameComponent {

    private suspects: string[];
    private weapons: string[];
    private rooms: string[];

    public constructor(
        protected dbService: DbService,
        protected gameService: GameService,
        protected dialogsService: DialogsService,
        protected viewContainerRef: ViewContainerRef) {

        super(dbService, gameService, dialogsService, viewContainerRef);

        this.suspects = [
            'Col. Mustard',
            'Prof Plum',
            'Mr. Green',
            'Mrs. Peacock',
            'Ms. Scarlet',
            'Mrs. White',
        ];

        this.weapons = [
            'Knife',
            'Candlestick',
            'Revolver',
            'Rope',
            'Lead Pipe',
            'Wrench',
        ];

        this.rooms = [
            'Hall',
            'Lounge',
            'Dining Room',
            'Kitchen',
            'Ballroom',
            'Conservatory',
            'Billiard Room',
            'Library',
            'Study',
        ];
    }

    public onUserLoaded(user: any) {
        if (user.clueGame) {
            user.clueGame = new ClueGamesheet(user.clueGame);
        }
        else {
            user.clueGame = new ClueGamesheet({
                suspects: this.suspects,
                weapons: this.weapons,
                rooms: this.rooms,
            });
        }
    }

    public onUserReset(user: any) {
        user.clueGame = new ClueGamesheet();
    }
}