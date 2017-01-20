import {Component} from "@angular/core";

@Component({
    selector: "app-main",
    template: `
<md-toolbar color="primary">
    <md-icon (click)="toggleSidebar()" class="burger">menu</md-icon>
    <span>Application Title</span>
    <span class="example-fill-remaining-space"></span>
</md-toolbar>
<md-sidenav-container>
    <div class="toolbar-shadow"></div>
    <md-sidenav [mode]="(windowIsSmall) ? 'push' : 'side'" opened="{{showSidenav}}">
        <side-nav-items></side-nav-items>
    </md-sidenav>
    <router-outlet></router-outlet>
</md-sidenav-container>
`,
styles: [`
md-sidenav {
    width: 240px;
}
.burger {
    margin-right: 16px;
    cursor: pointer;
}
md-sidenav, md-sidenav-container {
    overflow: auto;
    padding-bottom: 64px;
}
`],
})
export class MainAppComponent {
    public showSidenav: boolean;
    public windowIsSmall: boolean;

    public constructor() {
        if (window.matchMedia) {
            console.log("We have matchMedia");
            var mq = window.matchMedia("(min-width: 500px)");
            mq.addListener((mq) => {
                if (mq.matches) {
                    this.showSidenav = true;
                    this.windowIsSmall = false;
                } else {
                    this.showSidenav = false;
                    this.windowIsSmall = true;
                }
            });

            if (mq.matches) {
                this.showSidenav = true;
                this.windowIsSmall = false;
            } else {
                this.showSidenav = false;
                this.windowIsSmall = true;
            }
        }
        else {
            this.showSidenav = true;
        }
    }

    public toggleSidebar() {
        this.showSidenav = !this.showSidenav;
    }
}
