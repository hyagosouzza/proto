import { OptionsService } from './../shared/option/options.service';
import { EventoService } from './../shared/evento/evento.service';
import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from 'primeng/api';                 //api
import { SelectItem } from 'primeng/api';
import { LoginService } from '../shared/login/login.service';
import { Message } from 'primeng/components/common/api';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  idInstancia: any;
  itemsAprov: any;
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

  opInst: SelectItem[] = [{ label: 'Unidade', value: 'UNIDADE' },
  { label: 'Curso', value: 'CURSO' },
  { label: 'Regional', value: 'REGIONAL' }];

  opFilter: SelectItem[] = [];
  opAux: SelectItem[];

  display: boolean = false;

  display2: boolean = false;

  acesso: number;

  nome = "Nome";

  filter: boolean = false;

  options: any = {};
  unidades: SelectItem[] = [{label: 'Selecionar Unidade', value: null}];
  cursos: SelectItem[] = [{label: 'Selecionar Curso', value: null}];
  regionais: SelectItem[] = [{label: 'Selecionar Regional', value: null}];

  noticias: boolean = false;

  eventos: boolean = true;

  nomeSolicitante: string;

  emailSolicitante: string;

  isAdm: boolean = false;

  constructor(private id: LoginService, private eventoService: EventoService, private optionsService: OptionsService) { }

  evento(form: NgForm) {
    var data = new Date();
    var miliseconds = data.getTime() - 10800000;
    var dataConvertida = new Date(miliseconds);
    this.eventoService.evento(form, this.idInstancia, this.emailSolicitante, this.nomeSolicitante, dataConvertida).subscribe(result => { }, error => console.error(error));
    this.display2 = false;
  }


  ngOnInit() {

    this.eventoService.getAll().subscribe(result => {
      for(let n = 0; n < result.length; n++) {
        if(result[0].aprovacao.aprovada === true) {
          this.itemsAprov.push(result[0]);
        }
      }
    }, error => console.error(error));

    this.msgs = [];
    this.msgs.push({ severity: 'info', summary: 'Eventos', detail: 'Mensagens Novas' });

    this.id.getId(this.id.id).subscribe(result => {
      this.nomeSolicitante = result.nome;
      this.emailSolicitante = result.email;
      console.log("function");
      if (result.gerencia.length === 0) {
        this.items = this.items;
        this.isAdm = false;
      }
      else {
        this.items = this.itemsAdm;
        this.isAdm = true;
      }
      this.nome = result.nome;
      console.log(this.items);
    }, error => console.error(error));

    this.optionsService.getOptions().subscribe(result => {
      console.log(result);
      this.options = result;

      for(let n = 0; n < result.length; n++) {
        if (result[n].tipo == "UNIDADE") {
          this.unidades.push({label: result[n].nome, value: result[n].nome});
        } else if (result[n].tipo == "CURSO") {
          this.cursos.push({label: result[n].nome, value: result[n].nome});
        }
        else if (result[n].tipo == "REGIONAL") {
          this.regionais.push({label: result[n].nome, value: result[n].nome});
        }
      }

      console.log(this.cursos);
      console.log(this.unidades);
      console.log(this.regionais);

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
    if(insta) {
      if(insta.value == "CURSO") {
        this.opFilter = this.cursos;
      } else if(insta.value == "UNIDADE") {
        console.log(this.unidades)
        this.opFilter = this.unidades;
      } else {
        this.opFilter = this.regionais;
      }
    }
  }

  filterByName2(insta2) {
    if(insta2) {
      var n = 0;
      for (n = 0; n < this.options.length; n++) {
        if (this.options[n].nome == insta2.value) {
          this.idInstancia = this.options[n].id;
        }
      }
    }
    console.log("id = " + this.idInstancia);
  }
}
