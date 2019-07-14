import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class BarService {
    constructor(private http: HttpClient) {}

    fetchBarData() {
        return  this.http.get(`http://pb-api.herokuapp.com/bars`);
    }
}
