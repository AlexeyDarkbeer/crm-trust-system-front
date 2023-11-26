import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {BusinessProcess} from "../../../services/business-processes/models/business-process.model";
import {MatPaginator} from "@angular/material/paginator";
import {BusinessProcessService} from "../../../services/business-processes/business-process.service";
import {delay} from "rxjs";

@Component({
  selector: 'app-business-proccess-list',
  templateUrl: './business-proccess-list.component.html',
  styleUrls: ['./business-proccess-list.component.scss']
})
export class BusinessProccessListComponent  implements OnInit {
  public dataSource: MatTableDataSource<BusinessProcess>;

  public loading : boolean = true;
  public displayedColumns: string[] = [
    'name',
    'description',
    'stageName',
    'stageDescription',
    'stageStartDate',
    'stageStatus',
    'stageUpdateDate'
  ];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private businessProcessService : BusinessProcessService) {
  }
  ngOnInit(): void {
    this.businessProcessService.getBusinessProcesses()
      .pipe(delay(1000))
      .subscribe((businessProcesses) =>{
        this.dataSource = new MatTableDataSource(businessProcesses);
        this.dataSource.paginator = this.paginator;
        this.loading = false;
      })
  }
}
