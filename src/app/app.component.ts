import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from './shared/login/login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user: any = {};

  constructor(private loginService: LoginService) {}

  login(form: NgForm) {
    this.loginService.login(form).subscribe(result => {}, error => console.error(error));
  }

}
