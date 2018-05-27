import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from 'primeng/api';                 //api
import { LoginService } from '../shared/login/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items: MenuItem[] = [{ label: 'Configuração', icon: 'fa-cogs', routerLink: ['/theming'] },
  { label: 'Forma de Notificação', icon: 'fa-envelope', command: () => { this.click(); } },
  { label: 'Privacidade', icon: 'fa-user-secret', routerLink: ['/theming'] },
  { label: 'Ajuda', icon: 'fa-question', url: 'http://angular.io' },
  { label: 'Logout', icon: 'fa-sign-out', url: 'login' }];

  itemsAdm: MenuItem[] = [{ label: 'Configuração', icon: 'fa-cogs', routerLink: ['/theming'] },
  { label: 'Forma de Notificação', icon: 'fa-envelope', command: () => { this.click(); } },
  { label: 'Privacidade', icon: 'fa-user-secret', routerLink: ['/theming'] },
  { label: 'Aprovar Eventos', icon: 'fa-user-secret', url: 'eventos' },
  { label: 'Ajuda', icon: 'fa-question', url: 'http://angular.io' },
  { label: 'Logout', icon: 'fa-sign-out', url: 'login' }];


  menItens: MenuItem[];

  display: boolean = false;

  display2: boolean = false;

  acesso: number;

  val1: string;

  constructor(private id: LoginService) { }

  ngOnInit() {

    this.id.getId(this.id.id).subscribe(result => {
      if (result.gerencia === null) {
        this.items = this.items;
      }
      else {
        this.items = this.itemsAdm;
      }
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
}
