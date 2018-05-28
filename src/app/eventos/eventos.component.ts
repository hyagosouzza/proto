import { Component, OnInit } from '@angular/core';
import { EventoService } from '../shared/evento/evento.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  event: any = {};

  constructor(private evento: EventoService) { }

  ngOnInit() {
    this.evento.getAll().subscribe(eventObj => {console.log(eventObj)});
    console.log(this.event);
  }

}
