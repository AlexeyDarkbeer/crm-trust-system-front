import { Component } from '@angular/core';
import {BusinessProcessService} from "../../../services/business-processes/business-process.service";

@Component({
  selector: 'app-business-proccess-form',
  templateUrl: './business-proccess-form.component.html',
  styleUrls: ['./business-proccess-form.component.scss']
})
export class BusinessProccessFormComponent {

  constructor(private businessProcessService : BusinessProcessService) {
  }
}
