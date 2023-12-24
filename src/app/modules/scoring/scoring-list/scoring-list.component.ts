import { Component } from '@angular/core';
import {PersonModel} from "../../../services/persons/models/person.model";
import {PersonService} from "../../../services/persons/person.service";
import {ScoringModel} from "../../../services/scoring/models/scoring.model";
import {ScoringService} from "../../../services/scoring/scoring.service";

@Component({
  selector: 'app-scoring-list',
  templateUrl: './scoring-list.component.html',
  styleUrls: ['./scoring-list.component.scss']
})
export class ScoringListComponent {
  public scoringModel!: ScoringModel;
  public loading : boolean = true;

  constructor(private scoringService: ScoringService) {
  }

  ngOnInit() {
    this.scoringService.getScorings()
      .subscribe(scoring =>{
        if(scoring != null){
          this.scoringModel = scoring[0];
          this.loading = false;
        }
      });
  }
}
