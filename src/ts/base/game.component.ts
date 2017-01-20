import {Component, OnInit, ViewContainerRef} from "@angular/core";
import {DbService} from "../db.service";
import {Observable} from 'rxjs/Rx';
import {GameService} from "../game.service";
import {DialogsService} from "./dialogs";

@Component({
    selector: "users",
    template: `
<h1>All Users</h1>
<md-list>
    <md-card *ngFor="let user of users">
        <md-card-header>
            <div class="user-name">{{user.name}}</div>
        </md-card-header>
        <md-card-actions>
            <button md-button (click)="editUsername(user)">Edit Name</button>
            <button md-button (click)="removeUser(user)">Remove</button>
        </md-card-actions>
    </md-card>
    <md-card>
        <md-input-container>
            <input md-input type="text" placeholder="New User's Name" name="username" [(ngModel)]="newUser.name">
        </md-input-container>
        <br>
        <button md-raised-button color="primary" (click)="addUser()">Add User</button>
    </md-card>
</md-list>
`
})
export class GameComponent implements OnInit {

    private usersDb: any;
    private table: string;

    protected users: any[];
    protected newUser: User;

    protected autosave: boolean;
    protected dirty: boolean;

    public constructor(
        protected dbService: DbService,
        protected gameService: GameService,
        protected dialogsService: DialogsService,
        protected viewContainerRef: ViewContainerRef) {

        this.table = "users";
        this.usersDb = dbService.getInstance(this.table);
        this.newUser = new User();

        this.autosave = true;
    }

    public ngOnInit() {
        this.gameService.getPreference("autosave", true).then((t) => {
            this.autosave = t;
        });

        this.loadUsers().then(() => {
            let timer = Observable.timer(5000, 5000);
            timer.subscribe(() => {
                if(this.autosave) {
                    this.onGameSaved()
                }
            });
        });
    }

    protected onUsersLoaded() {
        for (let user of this.users) {
            this.onUserLoaded(user);
        }
    }

    protected onUserLoaded(user: any) {

    }

    protected onUsersReset() {
        for (let user of this.users) {
            this.onUserReset(user);
        }
    }

    protected onUserReset(user: any) {

    }

    protected onGameSaved() {
        if(this.dirty) {
            console.log("saving game");
            this.dirty = false;

            if(this.users && this.users.length > 0) {
                for (let user of this.users) {
                    this.onSaveUser(user);
                }
            }
        }
    }

    private onSaveUser(user: any) {
        this.usersDb.get(user._id).then((doc) => {
            user._rev = doc._rev;
            return this.usersDb.put(user);
        }).then((response) => {

        }).catch((err) => {
            console.log(err);
        });
    }

// Manage users of the game
    protected loadUsers() {
        return this.usersDb.allDocs({
            include_docs: true
        }).then(t => {
            this.users = t.rows.map(function (x) {
                return x.doc;
            });
            console.log(this.users);
            this.onUsersLoaded();
        });
    }

// basic game actions
//----------------------------------------------------------------------------------------------------------------------
    public addUser() {
        for (let user of this.users) {
            if (user._id === this.newUser.name) {
                console.log("user already exists");
                return;
            }
        }

        DbService.generateGuid(this.table).then(guid => {
            this.newUser._id = guid;
            this.usersDb.put(this.newUser).then(t => {
                this.loadUsers();
            });
        })
    }

    public removeUser(user) {
        this.dialogsService
            .confirm('Confirm Dialog', 'Are you sure you want to do this?', this.viewContainerRef)
            .subscribe((result) => {
                if(result) {
                    this.usersDb.remove(user).then(t => {
                        this.loadUsers();
                        console.log("Removed user: ");
                    });
                }
            });
    }

    public editUsername(user) {
        this.dialogsService
            .prompt('Edit Username', `Set the new name for ${user.name}`, 'text', this.viewContainerRef)
            .subscribe((result) => {
                if(result) {
                    user.name = result;
                }
            });
    }

    public saveGame() {
        this.onGameSaved();
    }

    public resetScores() {
        this.onUsersReset();
    }

    public toggleAutosave() {
        this.gameService.setPreference("autosave", !this.autosave).then(() => {
            this.autosave = !this.autosave;
        });
    }
}

export class User {
    _id: string;
    _rev: string;
    name: string;
}
