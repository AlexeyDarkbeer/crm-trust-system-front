import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import {PersonModel} from "../../../services/persons/models/person.model";
import {PersonService} from "../../../services/persons/person.service";

@Component({
  selector: 'app-persons-list',
  templateUrl: './persons-list.component.html',
  styleUrls: ['./persons-list.component.scss']
})
export class PersonsListComponent implements OnInit{
  public dataSource: MatTableDataSource<PersonModel>;

  public loading : boolean = true;
  public displayedColumns: string[] = [
    'firstName',
    'lastName',
    'middleName',
    'gender',
    'birthDate',
    'companyName',
    'position'
  ];

  // @ts-ignore
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private personService: PersonService) {
  }

  ngOnInit() {
    this.personService.getPersons()
      .subscribe((data: PersonModel[]) => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.loading = false;
      });
  }
}
