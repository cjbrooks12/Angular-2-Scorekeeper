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
   <a md-list-item routerLink="basic" routerLinkActive="active">Carcassone</a>
   <a md-list-item routerLink="basic" routerLinkActive="active">Clue</a>
</md-nav-list>
`
})
export class SideNavComponent {

}