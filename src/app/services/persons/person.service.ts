import { Injectable } from '@angular/core';
import { Person } from './models/person.model';
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class PersonService {

  private persons: Person[] = [
    { id: 1, firstName: 'Иван', lastName: 'Иванов', address: 'г. Москва', phone: '123456789', gender: 'male', birthDate: new Date('1990-01-01') },
    { id: 2, firstName: 'Мария', lastName: 'Смирнова', address: 'г. Санкт-Петербург', phone: '987654321', gender: 'female', birthDate: new Date('1985-05-15') },
    { id: 3, firstName: 'Александр', lastName: 'Петров', address: 'г. Екатеринбург', phone: '555112233', gender: 'male', birthDate: new Date('1982-09-20') },
    { id: 4, firstName: 'Екатерина', lastName: 'Иванова', address: 'г. Новосибирск', phone: '777889900', gender: 'female', birthDate: new Date('1995-11-30') },
    { id: 5, firstName: 'Сергей', lastName: 'Сидоров', address: 'г. Казань', phone: '444556677', gender: 'male', birthDate: new Date('1988-07-08') },
    { id: 6, firstName: 'Ольга', lastName: 'Кузнецова', address: 'г. Челябинск', phone: '111223344', gender: 'female', birthDate: new Date('1993-04-25') },
    { id: 7, firstName: 'Дмитрий', lastName: 'Яковлев', address: 'г. Самара', phone: '999888777', gender: 'male', birthDate: new Date('1980-03-12') },
    { id: 8, firstName: 'Анна', lastName: 'Павлова', address: 'г. Уфа', phone: '666777888', gender: 'female', birthDate: new Date('1987-12-18') },
    { id: 9, firstName: 'Владимир', lastName: 'Михайлов', address: 'г. Омск', phone: '333444555', gender: 'male', birthDate: new Date('1992-06-05') },
    { id: 10, firstName: 'Елена', lastName: 'Козлова', address: 'г. Воронеж', phone: '222333444', gender: 'female', birthDate: new Date('1984-08-23') },
    { id: 11, firstName: 'Игорь', lastName: 'Андреев', address: 'г. Ростов-на-Дону', phone: '777666555', gender: 'male', birthDate: new Date('1998-02-17') },
    { id: 12, firstName: 'Татьяна', lastName: 'Федорова', address: 'г. Красноярск', phone: '888999000', gender: 'female', birthDate: new Date('1981-10-09') },
    { id: 13, firstName: 'Артем', lastName: 'Васильев', address: 'г. Иркутск', phone: '123321456', gender: 'male', birthDate: new Date('1996-07-31') },
    { id: 14, firstName: 'Наталья', lastName: 'Зайцева', address: 'г. Тюмень', phone: '654987321', gender: 'female', birthDate: new Date('1986-12-04') },
    { id: 15, firstName: 'Павел', lastName: 'Белов', address: 'г. Ярославль', phone: '987123654', gender: 'male', birthDate: new Date('1994-04-14') },
    { id: 16, firstName: 'Марина', lastName: 'Григорьева', address: 'г. Владивосток', phone: '321789654', gender: 'female', birthDate: new Date('1983-11-26') },
    { id: 17, firstName: 'Алексей', lastName: 'Комаров', address: 'г. Калининград', phone: '555000111', gender: 'male', birthDate: new Date('1991-09-03') },
    { id: 18, firstName: 'Юлия', lastName: 'Александрова', address: 'г. Мурманск', phone: '111222333', gender: 'female', birthDate: new Date('1989-05-20') },
    { id: 19, firstName: 'Виктор', lastName: 'Степанов', address: 'г. Сочи', phone: '987654123', gender: 'male', birthDate: new Date('1997-03-28') },
    { id: 20, firstName: 'Людмила', lastName: 'Николаева', address: 'г. Пермь', phone: '456789012', gender: 'female', birthDate: new Date('1980-08-15') }
  ];

  getPeople(): Observable<Person[]> {
    return of(this.persons);
  }

  addPerson(person: Person): void {
  }
}
