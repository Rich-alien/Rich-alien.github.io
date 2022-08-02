import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "../pages/main/main.component";
import {MyProjectsComponent} from "../pages/my-projects/my-projects.component";

const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
  },
  {
    path: 'projects',
    component: MyProjectsComponent,
  },
  {path: '', redirectTo: 'main', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
