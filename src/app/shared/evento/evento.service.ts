import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EventoService {

  public API = '//189.123.150.41:8080/';
  public eventoAPI = this.API + 'evento';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get('//189.123.150.41:8080/eventoes');
  }

  evento(evento: any): Observable<any> {
    let result: Observable<Object>;
    result = this.http.put(this.eventoAPI, evento);
    return result;
  }

  getEventos(): Observable<any> {
    let result: Observable<Object>;
    result = this.http.get(this.API + 'eventoes/');
    return result;
  }

}
