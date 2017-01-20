import {Component} from "@angular/core";

@Component({
    selector: 'side-nav-items',
    template: `
<md-nav-list>
   <a md-list-item routerLink="users" routerLinkActive="active">Users</a>
</md-nav-list>
<md-nav-list>
   <a md-list-item routerLink="basic" routerLinkActive="active">Basic</a>
   <a md-list-item routerLink="sevenwonders" routerLinkActive="active">Seven Wonders</a>
   <a md-list-item routerLink="ttr" routerLinkActive="active">Ticket To Ride</a>
   <!--<a md-list-item>Carcassone</a>-->
   <a md-list-item routerLink="clue" routerLinkActive="active">Clue</a>
</md-nav-list>
`,
    styles: [`
[md-list-item].active {
background-color: rgba(80, 80, 80, 0.15);
}
`]
})
export class SideNavComponent {

}