import { Component } from '@angular/core';
import { TrendService } from './trend.service';
import { map } from 'rxjs/operators';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public trends;
  public timeSamples = [];
  public values = [];
  public chart;

  constructor(private _trend: TrendService) {
    this.NgOnInit();
  }

  NgOnInit() {
    this.getData();
  }

  private getData() {
    this._trend.dailyTrends()
      .subscribe(
        data => {
          this.trends = data;
          this.trends.forEach(element => {
            this.values.push(element.average);
            this.timeSamples.push(element.time);
          });
          this.chart = new Chart('canvas', {
            type: 'line',
            data: {
              labels: this.timeSamples,
              datasets: [
                {
                  data: this.values,
                  borderColor: '#3cba9f',
                  fill: false
                }
              ]
            },
            options: {
              legend: {
                display: false
              },
              scales: {
                xAxes: [{
                  display: true
                }],
                yAxes: [{
                  display: true
                }],
              }
            }
          });
        },
        err => { console.error(err); }
      );
  }
}
