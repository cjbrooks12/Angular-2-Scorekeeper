import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {MaterialModule} from '@angular/material';

import {MainAppComponent} from "./base/main.component";
import {SideNavComponent} from "./base/side.component";
import {NotFoundComponent} from "./base/notfound.component";
import {GameComponent} from "./base/users.component";
import {BasicGameComponent} from "./games/basic/basic.component";
import {SevenWondersComponent} from "./games/sevenwonders/sevenwonders.component";

import {DbService} from "./db.service";
import {GameService} from "./game.service";
import {OrderBy} from "./util/orderby.pipe";

const appRoutes: Routes = [
    {path: 'users', component: GameComponent},
    {path: 'basic', component: BasicGameComponent},
    {path: 'sevenwonders', component: SevenWondersComponent},
    {path: '', redirectTo: '/users', pathMatch: 'full'},
    {path: '**', component: NotFoundComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {useHash: true}),
        MaterialModule.forRoot(),
        BrowserModule,
        FormsModule
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
        SevenWondersComponent
    ],
    providers: [DbService, GameService],
    bootstrap: [MainAppComponent]
})
export class AppModule {
}
