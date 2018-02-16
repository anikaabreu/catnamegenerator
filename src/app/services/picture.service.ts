import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { get } from 'selenium-webdriver/http';

// import { Pics } from '../models/Pic'


@Injectable()
export class PictureService {

  picURL : string = 'http://thecatapi.com/api/images/get';

  constructor(private http: HttpClient) {

   }

  // getPic(): Observable<Pics[]> {
  //   return this.http.get<Pics[]>(this.picURL);
  // }

}
