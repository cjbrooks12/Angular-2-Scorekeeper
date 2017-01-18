import {Component} from "@angular/core";

@Component({
    selector: 'top-nav',
    template: `
<nav class="navbar navbar-inverse navbar-fixed-top">
<div class="container-fluid">
  <div class="navbar-header">
    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
      <span class="sr-only">Toggle navigation</span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
    </button>
    <a class="navbar-brand" href="/">{{appTitle}}</a>
  </div>
  <div id="navbar" class="navbar-collapse collapse">
    <ul class="nav navbar-nav navbar-right">
      <li><a href="#">Dashboard</a></li>
      <li><a href="#">Settings</a></li>
      <li><a href="#">Profile</a></li>
      <li><a href="#">Help</a></li>
    </ul>
  </div>
</div>
</nav>
`
})
export class TopNavComponent {

    public appTitle: string;

    public constructor() {
        this.appTitle = "Score Keeper";
    }

}