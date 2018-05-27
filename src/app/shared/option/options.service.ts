import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class OptionsService {

  public API = '//192.168.1.4:8080/';
  public optionsAPI = this.API + 'instancias';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get('//192.168.1.4:8080/instancias');
  }

  getOptions(): Observable<any> {
    let result: Observable<Object>;
    result = this.http.get(this.API + 'instancias/');
    return result;
  }

}
