import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-area-chart',
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.css']
})
export class AreaChartComponent {
Highcharts=Highcharts 
chartOptions={}
constructor(){
  this.chartOptions={


    chart: {
      renderTo: 'container',
      type: 'column',
      options3d: {
          enabled: true,
          alpha: 15,
          beta: 15,
          depth: 50,
          viewDistance: 25
      }
  },
  xAxis: {
      categories: ['Mearn', '.Net', 'Python', 'Flutter', 'Bigdata', 'Java spring',
          'Ai', 'Testing', 'Data Science', 'ML',]
  },
  yAxis: { },
  tooltip: {
      headerFormat: '<b>{point.key}</b><br>',
      pointFormat: 'Placements: {point.y}'
  },
  title: {
      text: 'Yearly Placements analysis of Luminar Technolab 2022-23',
      align: 'center'
  },
  subtitle: {
      text: 'Luminar Technolab' ,
      align:'center',},
          

  legend: { enabled: false
  },
  credits:{enabled:false},
  plotOptions: {
      column: {
          depth: 25
      }
  },
  series: [{
      data: [1518, 1073, 1060, 813, 775, 745, 537, 444, 416, 395],
      colorByPoint: true
  }]
  }

}}

