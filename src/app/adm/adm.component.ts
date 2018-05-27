import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';                 //api


@Component({
  selector: 'app-adm',
  templateUrl: './adm.component.html',
  styleUrls: ['./adm.component.css']
})
export class AdmComponent implements OnInit {

  constructor() { }

  items: MenuItem[];

  menItens: MenuItem[];
  
  display: boolean = true;

  display2: boolean = false;

  ngOnInit() {

    this.items = [
      { label: 'Configuração', icon: 'fa-cogs', routerLink: ['/theming'] },
      { label: 'Ajuda', icon: 'fa-question', url: 'http://angular.io' },
      { label: 'Logout', icon: 'fa-sign-out', url: 'login' }    
    ];

    this.menItens = [
      { label: 'Cadastrar', icon: 'fa-plus-square-o',
        items: [
          { label: 'Cadastrar Usuário' },
          { label: 'Cadastrar Área de Conhecimento' },
          { label: 'Cadastrar Curso' }
        ]
      },
      { label: 'Definir papel dos Usuários', icon: 'fa-edit', command: () => { this.click(); } },
      { label: 'Adicionar notíticas e informações', icon: 'fa-newspaper-o' }
    ]

  }

  click(){
    this.display = !this.display;
    this.display2 = !this.display2;
  }

}
