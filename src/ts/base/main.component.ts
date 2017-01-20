import {Component} from "@angular/core";

@Component({
    selector: "app-main",
    template: `
<md-toolbar color="primary">
    <md-icon (click)="toggleSidebar()" class="burger">menu</md-icon>
    <span>Application Title</span>
    <span class="example-fill-remaining-space"></span>
    <span>Right Aligned Text</span>
</md-toolbar>
<md-sidenav-container>
  <md-sidenav mode="side" opened="{{showSidenav}}">
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

    public toggleSidebar() {
        this.showSidenav = !this.showSidenav;
    }
}
