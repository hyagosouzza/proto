import { Component, OnInit } from '@angular/core';
import { EventoService } from '../shared/evento/evento.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  items: any;

  constructor(private eventos: EventoService) { }

  aprovado: any = {};

  ngOnInit() {
    this.eventos.getAll().subscribe(eventObj => { console.log(eventObj), this.items = eventObj; });
  }

  display: boolean = false;

  showDialog() {
    this.display = true;
  }

  confirm(id, parecer) {
    console.log(id);
    this.aprovado.id = id;
    this.aprovado.aprovada = true;
    this.aprovado.parecer = parecer;
    this.eventos.sendAprov(this.aprovado).subscribe();
    this.display = false;
  }

  decline(id, parecer) {
    this.aprovado.id = id;
    this.aprovado.aprovada = false;
    this.aprovado.parecer = parecer;
    this.eventos.sendAprov(this.aprovado).subscribe();
    this.display = false;
  }
}