import {Component} from "@angular/core";

@Component({
    selector: "app-main",
    template: `
<top-nav>Loading...</top-nav>
<div class="container-fluid">
  <div class="row">
    <div class="col-sm-3 col-md-2 sidebar">
      <side-nav>Loading...</side-nav>
    </div>
    <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
      <h2 class="sub-header">Application</h2>
      <app-body>Loading...</app-body>
    </div>
  </div>
</div>
`,
})
export class MainAppComponent {

}
