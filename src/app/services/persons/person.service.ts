import { Injectable } from '@angular/core';
import { PersonModel } from './models/person.model';
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class PersonService {

  private personModels: PersonModel[] = [
    {
      id: 1,
      firstName: 'Алексей',
      lastName: 'Попов',
      address: 'ул. Ленина, 123',
      phone: '123-456-7890',
      gender: 'Мужской',
      birthDate: new Date('1990-01-01'),
      passport: {
        series: '1234',
        number: '567890',
        issuedBy: 'УМВД России по Оренбургской области',
        issueDate: new Date('2010-01-01'),
        departmentNumber: '123-456',
      },
      job: {
        companyName: 'ООО Работа',
        position: 'Разработчик',
        startDate: new Date('2023-01-01'),
      },
      credits: [
        {
          creditType: 'Кредит на пиво',
          amount: 200000,
          startDate: new Date('2022-01-01'),
          endDate: new Date('2030-01-01'),
        },
      ],
    },
    {
      id: 2,
      firstName: 'Мария',
      lastName: 'Петрова',
      address: 'ул. Гагарина, 45',
      phone: '987-654-3210',
      gender: 'Женский',
      birthDate: new Date('1985-05-15'),
      passport: {
        series: '5678',
        number: '123456',
        issuedBy: 'Отделение полиции №2',
        issueDate: new Date('2005-02-20'),
        departmentNumber: '654-321',
      },
      job: {
        companyName: 'ЗАО Компания',
        position: 'Менеджер',
        startDate: new Date('2012-07-01'),
      },
      credits: [
        {
          creditType: 'Автокредит',
          amount: 50000,
          startDate: new Date('2018-03-10'),
          endDate: new Date('2023-03-10'),
        },
      ],
    },
    {
      id: 3,
      firstName: 'Алексей',
      lastName: 'Смирнов',
      address: 'ул. Пушкина, 67',
      phone: '555-555-5555',
      gender: 'Мужской',
      birthDate: new Date('1982-09-03'),
      passport: {
        series: '4321',
        number: '987654',
        issuedBy: 'Отделение полиции №3',
        issueDate: new Date('2007-06-15'),
        departmentNumber: '789-012',
      },
      job: {
        companyName: 'ИП Иванов',
        position: 'Бухгалтер',
        startDate: new Date('2015-04-01'),
      },
      credits: [
        {
          creditType: 'Личный кредит',
          amount: 20000,
          startDate: new Date('2021-02-15'),
          endDate: new Date('2022-02-15'),
        },
      ],
    },
    {
      id: 4,
      firstName: 'Елена',
      lastName: 'Сергеева',
      address: 'ул. Советская, 87',
      phone: '111-222-3333',
      gender: 'Женский',
      birthDate: new Date('1995-12-10'),
      passport: {
        series: '8765',
        number: '432109',
        issuedBy: 'Отделение полиции №4',
        issueDate: new Date('2013-08-25'),
        departmentNumber: '345-678',
      },
      job: {
        companyName: 'Газпром',
        position: 'Инженер',
        startDate: new Date('2021-05-01'),
      },
      credits: [
        {
          creditType: 'Образовательный кредит',
          amount: 30000,
          startDate: new Date('2022-09-01'),
          endDate: new Date('2025-09-01'),
        },
      ],
    },
    {
      id: 5,
      firstName: 'Дмитрий',
      lastName: 'Павлов',
      address: 'ул. Кирова, 56',
      phone: '777-888-9999',
      gender: 'Мужской',
      birthDate: new Date('1988-07-20'),
      passport: {
        series: '1357',
        number: '975310',
        issuedBy: 'Отделение полиции №5',
        issueDate: new Date('2006-03-12'),
        departmentNumber: '987-654',
      },
      job: {
        companyName: 'Microsoft',
        position: 'Программист',
        startDate: new Date('2015-10-01'),
      },
      credits: [
        {
          creditType: 'Кредитная карта',
          amount: 1500,
          startDate: new Date('2020-02-01'),
          endDate: new Date('2023-02-01'),
        },
      ],
    },
  ];

  getPeople(): Observable<PersonModel[]> {
    return of(this.personModels);
  }

  addPerson(person: PersonModel): void {
  }
}
