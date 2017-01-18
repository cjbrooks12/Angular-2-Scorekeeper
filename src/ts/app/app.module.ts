import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';

import {MainAppComponent} from "./main.component";
import {TopNavComponent}  from "./top.component";
import {SideNavComponent} from "./side.component";
import {AppBodyComponent} from "./body.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        MainAppComponent,
        TopNavComponent,
        SideNavComponent,
        AppBodyComponent
    ],
    bootstrap: [MainAppComponent]
})
export class AppModule {
}
