import { Component, OnInit } from '@angular/core';
import { LoginService } from '../shared/login/login.service';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.css']
})
export class TelaLoginComponent implements OnInit {

  user: Array<any>;
  
    constructor(private loginService: LoginService) { }
  
    ngOnInit() {
      this.loginService.getAll().subscribe(data => {
        this.user = data;
      });
    }

}
