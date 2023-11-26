import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {BusinessProcess, RecoveryStage} from "./models/business-process.model";

@Injectable({
  providedIn: 'root',
})
export class BusinessProcessService {

  private testProcesses: BusinessProcess[] = [
    {
      id: '1',
      name: 'Взыскание по кредиту',
      description: 'Бизнес-процесс взыскания по выданному кредиту',
      stage:
        {
          id: '101',
          name: 'Инициирование взыскания',
          description: 'Начальный этап взыскания',
          startDate: new Date('2023-01-01'),
          status: { id: '1', name: 'В процессе', description: 'Этап в процессе взыскания' },
          updateDate: new Date('2023-01-05'),
        }
    },
    {
      id: '2',
      name: 'Взыскание по ипотеке',
      description: 'Бизнес-процесс взыскания по ипотечному кредиту',
      stage:
        {
        id: '201',
        name: 'Уведомление дебитора',
        description: 'Этап уведомления должника о начале взыскания',
        startDate: new Date('2023-02-01'),
        status: { id: '1', name: 'В процессе', description: 'Этап в процессе взыскания' },
        updateDate: new Date('2023-02-05'),
      }
    }
  ];

  getBusinessProcesses(): Observable<BusinessProcess[]> {
    return of(this.testProcesses);
  }
}

