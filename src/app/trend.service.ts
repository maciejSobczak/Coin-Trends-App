import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrendService {

  public ids = ['BTCUSD', 'LTCUSD', 'ETHUSD'];
  constructor(private _http: HttpClient) { }

  dailyTrends() {
    return this._http.get('https://apiv2.bitcoinaverage.com/indices/global/history/BTCUSD?period=monthly&?format=json');
  }
}
