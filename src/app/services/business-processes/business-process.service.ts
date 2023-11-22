import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {BusinessProcessModel} from "./models/business-process.model";

@Injectable({
  providedIn: 'root',
})
export class PersonService {

  private businessProcessModels: BusinessProcessModel[] = [
    {
      id: 1,
      processName: 'Инициирование взыскания',
      description: 'Запуск процесса взыскания задолженности по определенному дебитору.'
    },
    {
      id: 2,
      processName: 'Оценка задолженности',
      description: 'Определение суммы задолженности, учет процентов, если таковые предусмотрены.'
    },
    {
      id: 3,
      processName: 'Уведомление дебитора',
      description: 'Отправка уведомлений дебитору о задолженности, сроках платежа и возможных последствиях.'
    },
    {
      id: 4,
      processName: 'План погашения долга',
      description: 'Разработка совместного плана погашения задолженности, учитывая финансовые возможности дебитора.'
    },
    {
      id: 5,
      processName: 'Мониторинг платежей',
      description: 'Отслеживание внесенных платежей и обновление информации о статусе задолженности.'
    },
    {
      id: 6,
      processName: 'Прекращение взыскания',
      description: 'Прекращение процесса взыскания после полного погашения долга или по другим причинам.'
    }
  ];

  getBusinessProcesses(): Observable<BusinessProcessModel[]> {
    return of(this.businessProcessModels);
  }

}
