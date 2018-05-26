import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService {

  public API = '//192.168.1.4:8080/login';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get('//192.168.1.4:8080/login');
  }

  login(login: any): Observable<any> {
    let result: Observable<Object>;
    result = this.http.post(this.API, login);
    return result;
  }
}