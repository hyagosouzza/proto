import { Component, OnInit } from '@angular/core';
import { EventoService } from '../shared/evento/evento.service';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  items: any;

  constructor(private eventos: EventoService, private confirmationService: ConfirmationService) { }

  aprovado: any;

  ngOnInit() {
    this.eventos.getAll().subscribe(eventObj => { console.log(eventObj), this.items = eventObj; });
  }

  display: boolean = false;

  showDialog() {
    this.display = true;
  }

  confirm(id, parecer) {
    this.aprovado.id = id;
    this.aprovado.aprovada = true;
    this.aprovado.parecer = parecer;
    this.eventos.sendAprov(this.aprovado).subscribe();
  }

  decline(id, parecer) {
    this.aprovado.id = id;
    this.aprovado.aprovada = false;
    this.aprovado.parecer = parecer;
    this.eventos.sendAprov(this.aprovado).subscribe();
  }


}
