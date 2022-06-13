import {NgModule} from "@angular/core";
import {MainComponent} from "./main/main.component";
import {MyProjectsComponent} from "./my-projects/my-projects.component";

@NgModule({
  imports: [],
  declarations: [MainComponent, MyProjectsComponent],
  exports: [MainComponent, MyProjectsComponent]
})
export class PagesModel {
}
