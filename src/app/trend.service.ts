import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrendService {

  constructor(private _http: HttpClient) { }

  dailyTrends() {
    return this._http.get('https://apiv2.bitcoinaverage.com/indices/global/history/BTCUSD?period=daily&?format=json');
  }
}
