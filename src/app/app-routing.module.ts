import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DefaultComponent} from "./layouts/default/default.component";
import {DashboardComponent} from "./modules/dashboard/dashboard.component";
import {PersonsListComponent} from "./modules/persons/persons-list/persons-list.component";
import {PersonsCreateComponent} from "./modules/persons/persons-create/persons-create.component";

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children:[
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'persons',
        component: PersonsListComponent,
      },
      {
        path: 'persons-add',
        component: PersonsCreateComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
