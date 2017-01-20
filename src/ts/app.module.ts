import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {MaterialModule} from '@angular/material';

import {MainAppComponent} from "./base/main.component";
import {SideNavComponent} from "./base/side.component";
import {NotFoundComponent} from "./base/notfound.component";
import {GameComponent} from "./base/game.component";
import {BasicGameComponent} from "./games/basic/basic.component";
import {SevenWondersGameComponent} from "./games/sevenwonders/sevenwonders.component";
import {TicketToRideGameComponent} from "./games/ttr/ttr.component";

import {DialogsService, ConfirmDialog, PromptDialog} from './base/dialogs';

import {DbService} from "./db.service";
import {GameService} from "./game.service";
import {OrderBy} from "./util/orderby.pipe";

const appRoutes: Routes = [
    {path: 'users', component: GameComponent},
    {path: 'basic', component: BasicGameComponent},
    {path: 'sevenwonders', component: SevenWondersGameComponent},
    {path: 'ttr', component: TicketToRideGameComponent},
    {path: '', redirectTo: '/basic', pathMatch: 'full'},
    {path: '**', component: NotFoundComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {useHash: true}),
        MaterialModule.forRoot(),
        BrowserModule,
        FormsModule,
    ],
    declarations: [

        // Base app components
        MainAppComponent,
        SideNavComponent,
        NotFoundComponent,
        GameComponent,

        // Pipes
        OrderBy,

        // Particular game types
        BasicGameComponent,
        SevenWondersGameComponent,
        TicketToRideGameComponent,

        ConfirmDialog,
        PromptDialog,
    ],
    providers: [DbService, GameService, DialogsService],
    entryComponents: [
        ConfirmDialog,
        PromptDialog,
    ],
    bootstrap: [MainAppComponent]
})
export class AppModule {
}
