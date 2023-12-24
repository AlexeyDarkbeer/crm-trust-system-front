import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DefaultComponent} from "./layouts/default/default.component";
import {DashboardComponent} from "./modules/dashboard/dashboard.component";
import {PersonsListComponent} from "./modules/persons/persons-list/persons-list.component";
import {PersonsCreateComponent} from "./modules/persons/persons-create/persons-create.component";
import {PersonDetailsComponent} from "./modules/persons/person-details/person-details.component";
import {
  BusinessProccessListComponent
} from "./modules/businessProcesses/business-proccess-list/business-proccess-list.component";
import {AuthComponent} from "./modules/auth/auth.component";
import {CalcPersonListComponent} from "./modules/scoring/calc-person-list/calc-person-list.component";
import {ScoringListComponent} from "./modules/scoring/scoring-list/scoring-list.component";

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
      },
      {
        path: 'persons-details',
        component: PersonDetailsComponent
      },
      {
        path: 'persons-scorings',
        component: CalcPersonListComponent
      },
      {
        path: 'scoring-models',
        component: ScoringListComponent
      },
      {
        path: 'business-processes',
        component: BusinessProccessListComponent
      },
      {
        path: 'auth',
        component: AuthComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
