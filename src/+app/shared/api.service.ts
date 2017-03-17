import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { CacheService  } from './cache.service';


@Injectable()
export class ApiService {
  constructor(public _http: Http) {

  }

 /**
  * whatever domain/feature method name
  */
  get(url: string, options?: any) {
    console.log(url);
    return this._http.get(url, options)
      .map(res => res.json())
      .catch(err => {
        console.log('Error: ', err);
        return Observable.throw(err);
      });
  }
  save(url: string, obj: any, options?: any) {

    console.log(url);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let body = JSON.stringify(obj);
    console.log(obj);
    return this._http.put(url, body, headers)
      .map(res => res.json())
      .catch(err => {
        console.log('Error: ', err);
        return Observable.throw(err);
      });
  }

}
