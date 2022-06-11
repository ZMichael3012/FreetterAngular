import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NewsfeedComponent} from "./newsfeed/newsfeed.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'newsfeed'
  },
  {
    path: 'newsfeed',
    component: NewsfeedComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
