import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EventoService {

  public API = '//189.123.150.41:8080/';
  public eventoAPI = this.API + 'eventoes';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get('//189.123.150.41:8080/eventoes');
  }

  evento(evento: any, id: any, email: any, nome: any, data: any): Observable<any> {
    let result: Observable<Object>;
    evento.idInstancia = id;
    console.log( evento.idInstancia);
    evento.emailSolicitante = email;
    evento.solicitante = nome;
    evento.datetimeDivulgacao = data;
    result = this.http.post(this.eventoAPI, evento);
    console.log(result);
    return result;
  }

  getEventos(): Observable<any> {
    let result: Observable<Object>;
    result = this.http.get(this.API + 'eventoes/');
    return result;
  }

}
