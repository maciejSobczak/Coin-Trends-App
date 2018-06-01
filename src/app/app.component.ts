import { Component } from '@angular/core';
import { TrendService } from './trend.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private _trend: TrendService) {
    this.NgOnInit();
    console.log('thats it');
  }

  NgOnInit() {
    this._trend.dailyTrends()
      .subscribe(res => {
        console.log(res);
      });
  }
}
