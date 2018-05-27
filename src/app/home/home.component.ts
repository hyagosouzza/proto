import { OptionsService } from './../shared/option/options.service';
import { EventoService } from './../shared/evento/evento.service';
import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from 'primeng/api';                 //api
import { LoginService } from '../shared/login/login.service';
import { Message } from 'primeng/components/common/api';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  para: boolean = false;

  event: any = {};

  items: MenuItem[] = [{ label: 'Configuração', icon: 'fa-cogs', routerLink: ['/theming'] },
  { label: 'Forma de Notificação', icon: 'fa-envelope', command: () => { this.click(); } },
  { label: 'Privacidade', icon: 'fa-user-secret', routerLink: ['/theming'] },
  { label: 'Ajuda', icon: 'fa-question', url: 'http://angular.io' },
  { label: 'Logout', icon: 'fa-sign-out', url: 'login' }];

  itemsAdm: MenuItem[] = [{ label: 'Configuração', icon: 'fa-cogs', routerLink: ['/theming'] },
  { label: 'Forma de Notificação', icon: 'fa-envelope', command: () => { this.click(); } },
  { label: 'Privacidade', icon: 'fa-user-secret', routerLink: ['/theming'] },
  { label: 'Aprovar Eventos', icon: 'fa-user-secret', command: () => { this.aprovar(); } },
  { label: 'Ajuda', icon: 'fa-question', url: 'http://angular.io' },
  { label: 'Logout', icon: 'fa-sign-out', url: 'login' }];

  msgs: Message[] = [];

  menItens: MenuItem[];

  opInst: MenuItem[] = [{ label: 'UNIDADE' },
  { label: 'CURSO' },
  { label: 'REGIONAL' }];

  opArea: MenuItem[];

  opFilter: MenuItem[];

  display: boolean = false;

  display2: boolean = false;

  acesso: number;

  nome = "Nome";

  filter: boolean = false;

  options: any = {};

  noticias: boolean = false;

  eventos: boolean = true;

  constructor(private id: LoginService, private eventoService: EventoService, private optionsService: OptionsService) { }

  evento(form: NgForm) {
    this.eventoService.evento(form).subscribe(result => { }, error => console.error(error));
  }

  ngOnInit() {

    this.msgs = [];
    this.msgs.push({ severity: 'info', summary: 'Eventos', detail: 'Mensagens Novas' });

    this.id.getId(this.id.id).subscribe(result => {
      console.log("function");
      if (result.gerencia.length === 0) {
        this.items = this.items;
      }
      else {
        this.items = this.itemsAdm;

      }
      this.nome = result.nome;
      console.log(this.items);
    }, error => console.error(error));

    this.optionsService.getOptions().subscribe(result => {
      console.log(result);
      this.options = result;
    }, error => console.error(error));

    this.menItens = [
      { label: 'Divulgar Eventos', icon: 'fa-calendar', command: () => { this.click2(); } },
      { label: 'Consulta sobre Egressos', icon: 'fa-users' },
      {
        label: 'Históricos', icon: 'fa-history',
        items: [
          { label: 'Histórico na UFG' },
          { label: 'Histórico do Ensino Médio' },
          { label: 'Histórico em outras instituições de ES' },
          { label: 'Histórico Profissional' },
        ]
      },
      { label: 'Adicionar notíticas e informações', icon: 'fa-newspaper-o' }
    ]

    this.opArea = []

  }

  click() {
    this.showDialog();
  }

  showDialog() {
    this.display = true;
  }

  click2() {
    this.showDialog2();
  }

  showDialog2() {
    this.display2 = true;
  }

  aprovar() {
    this.noticias = !this.noticias;
    this.eventos = !this.eventos;
  }

  filterByName(insta) {
    console.log(insta.label);
    for (let n = 0; n < this.options.length; n++) {
      if (this.options[n].tipo === insta.label) {
        this.opFilter = [{ label: this.options[n].nome }];
      }
    }
  }
}
