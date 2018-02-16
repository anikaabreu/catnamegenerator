import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Http, Headers, RequestOptions } from '@angular/http';
import { get } from 'selenium-webdriver/http';

  // Name = require ('../models/names');

@Injectable()
export class NameService {

  // result:any; //takes any result in

  constructor(private http: Http) { }

  // Observable<Nouns[]> {
  //   return this.http.get<Nouns[]>(this.nounUrl);
  getNames() {
    // return this.http.get('/api/name').map(result => this.result = result.json().name);
  }

}
