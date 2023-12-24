import { Component } from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {ScoringModel} from "../../../services/scoring/models/scoring.model";

@Component({
  selector: 'app-scoring-form',
  templateUrl: './scoring-form.component.html',
  styleUrls: ['./scoring-form.component.scss']
})
export class ScoringFormComponent {
  entityForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.entityForm = this.fb.group({
      name: '',
      description: '',
      parameters: this.fb.array([this.initParameter()])
    });
  }

  initParameter() {
    return this.fb.group({
      name: '',
      description: '',
      intervals: this.fb.array([this.initInterval()])
    });
  }

  initInterval() {
    return this.fb.group({
      weight: 0,
      minValue: 0,
      maxValue: 0
    });
  }

  addParameter() {
    const parameters = this.entityForm.get('parameters') as FormArray;
    parameters.push(this.initParameter());
  }

  addInterval(parameterIndex: number) {
    const intervals = (this.entityForm.get('parameters') as FormArray)
      .at(parameterIndex)
      .get('intervals') as FormArray;
    intervals.push(this.initInterval());
  }

  onSubmit() {
    const formData: ScoringModel = this.entityForm.value;
    console.log(formData);
  }
}
