import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent {
  Highcharts=Highcharts 
  chartOptions={}
constructor(){this.chartOptions={ chart: {
  type: 'pie',
  options3d: {
      enabled: true,
      alpha: 45,
      beta: 0
  }
},
title: {
  text: 'AVERAGE STUDENT ADMISSION 2022-23',
  align: 'center'
},
subtitle: {
  text: ' Luminar Techno Lab',
     
  align: 'center'
},
accessibility: {
  point: {
      valueSuffix: '%'
  }
},
tooltip: {
  pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
},
plotOptions: {
  pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      depth: 35,
      dataLabels: {
          enabled: true,
          format: '{point.name}'
      }
  }
},
series: [{
  type: 'pie',
  name: 'Total Count',
          data: [
    ['MEARN', 20],
    ['PYTHON', 15],
    {
        name: 'DATA SCIENCE',
        y: 15,
        // sliced: true,
        // selected: true
    },
    ['.NET', 10],
    ['TESTING', 15],
    ['flutter', 20]
]
}]
}}
}
