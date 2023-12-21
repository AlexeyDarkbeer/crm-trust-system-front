import {Component, Input, OnInit} from '@angular/core';
import {PersonModel} from "../../../services/persons/models/person.model";
import {PersonService} from "../../../services/persons/person.service";
import {MatTableDataSource} from "@angular/material/table";
import {delay, map} from "rxjs";

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.scss']
})
export class PersonDetailsComponent implements OnInit {
  public user!: PersonModel;
  public loading : boolean = true;

  constructor(private personService: PersonService) {
  }

  ngOnInit() {
    this.personService.getPersons()
      .pipe(
        delay(500)
      )
      .subscribe(persons =>{
        if(persons != null){
          this.user = persons[0];
          this.loading = false;
        }
      });
  }

  formatCurrency(amount: number): string {
    return amount.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' });
  }

}
