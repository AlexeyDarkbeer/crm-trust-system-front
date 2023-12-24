import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {ScoringOutputModel} from "../../../services/scoring/models/scoringOutput.model";
import {ScoringService} from "../../../services/scoring/scoring.service";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-calc-person-list',
  templateUrl: './calc-person-list.component.html',
  styleUrls: ['./calc-person-list.component.scss']
})
export class CalcPersonListComponent implements OnInit {
  public dataSource: MatTableDataSource<ScoringOutputModel>;

  public loading: boolean = true;
  public displayedColumns: string[] = [
    'fullName',
    'personAge',
    'currentJobSalary',
    'currentJobMonths',
    'loanAmount',
    'loanMonths',
    'score',
    'result'
  ];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private scoringService: ScoringService) {
  }

  ngOnInit() {
    this.scoringService.getScoringResults()
      .subscribe((data: ScoringOutputModel[]) => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.loading = false;
      });
  }
}
