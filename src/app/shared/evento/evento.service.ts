import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EventoService {

  public API = '//192.168.1.167:8080/';
  public eventoAPI = this.API + 'evento';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get('//192.168.1.167:8080/eventno');
  }

  evento(evento: any): Observable<any> {
    let result: Observable<Object>;
    result = this.http.put(this.eventoAPI, evento);
    return result;
  }

}
