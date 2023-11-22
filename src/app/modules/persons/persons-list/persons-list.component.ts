import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import {PersonModel} from "../../../services/persons/models/person.model";
import {PersonService} from "../../../services/persons/person.service";
import {delay} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-persons-list',
  templateUrl: './persons-list.component.html',
  styleUrls: ['./persons-list.component.scss']
})
export class PersonsListComponent implements OnInit{
  // @ts-ignore
  public dataSource: MatTableDataSource<PersonModel>;

  public loading : boolean = true;
  public displayedColumns: string[] = ['firstName', 'lastName', 'address', 'phone', 'gender', 'birthDate'];

  // @ts-ignore
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private personService: PersonService) {
  }

  ngOnInit() {
    this.personService.getPeople()
      .pipe(delay(1000))
      .subscribe((people) => {
        this.dataSource = new MatTableDataSource(people);
        this.dataSource.paginator = this.paginator;
        this.loading = false;
      });
  }
}
