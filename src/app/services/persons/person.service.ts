import { Injectable } from '@angular/core';
import { PersonModel } from './models/person.model';
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  private baseUrl: string = 'http://localhost:5067/api/'
  private personModels: PersonModel[];

  constructor(private httpClient: HttpClient) {
  }

  getPersons(): Observable<PersonModel[]> {
    const url = `${this.baseUrl}Person/GetAll`
    return this.httpClient.get<PersonModel[]>(url);
  }

  addPerson(person: PersonModel): void {
  }
}
