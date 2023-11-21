import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import {DefaultComponent} from "./default.component";
import {DashboardComponent} from "../../modules/dashboard/dashboard.component";
import {SharedModule} from "../../shared/shared.module";
import {MatSidenavModule} from "@angular/material/sidenav";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatDividerModule} from "@angular/material/divider";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {HighchartsChartModule} from "highcharts-angular";
import {PersonsListComponent} from "../../modules/persons/persons-list/persons-list.component";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatInputModule} from "@angular/material/input";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatCardModule} from "@angular/material/card";
import {PersonsCreateComponent} from "../../modules/persons/persons-create/persons-create.component";
import {MatSelectModule} from "@angular/material/select";

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PersonsListComponent,
    PersonsCreateComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    FormsModule,
    FlexLayoutModule,
    HighchartsChartModule,

    MatSidenavModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatProgressBarModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatDatepickerModule,
    MatSelectModule,
  ]
})
export class DefaultModule { }