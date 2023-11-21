import {Component, OnInit} from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import HC_exportData from 'highcharts/modules/export-data';

// Импортируем дополнительные модули Highcharts
HC_exporting(Highcharts);
HC_exportData(Highcharts);


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  HighchartsCredit: typeof Highcharts = Highcharts;
  HighchartsOverCredit: typeof Highcharts = Highcharts;

  chartCreditOptions: Highcharts.Options = {};
  chartOverCreditOptions: Highcharts.Options = {};

  ngOnInit() {
    const months = ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'];

    const credits = [100, 120, 150, 200, 180, 250, 300, 280, 320, 400, 350, 380];
    const overdueCredits = [10, 15, 20, 30, 25, 35, 40, 38, 45, 50, 48, 55];

    this.chartCreditOptions = {
      chart: {
        type: 'line',
      },
      title: {
        text: 'График роста количества кредитов',
      },
      xAxis: {
        categories: months,
      },
      yAxis: {
        title: {
          text: 'Количество кредитов',
        },
      },
      series: [
        {
          name: 'Количество кредитов',
          data: credits,
          color: 'blue'
        }
      ] as Highcharts.SeriesOptionsType[],
    };

    this.chartOverCreditOptions = {
      chart: {
        type: 'line',
      },
      title: {
        text: 'График роста количества просроченных кредитов',
      },
      xAxis: {
        categories: months,
      },
      yAxis: {
        title: {
          text: 'Количество кредитов',
        },
      },
      series: [
        {
          name: 'Количество просроченных кредитов',
          data: overdueCredits,
          color: 'purple'
        },
      ] as Highcharts.SeriesOptionsType[],
    };

  }
}
