import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../shared/login/login.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  user: any = {};
  
    constructor(private loginService: LoginService, private router: Router) { }
  
    goto() {
      this.router.navigate(['home']);
    }
  
    login(form: NgForm) {
      this.loginService.login(form).subscribe(result => {
        if (result.cpf === null) {
          console.log('iti malia');
        }
        else {
          this.goto();
        }
      }, error => console.error(error));
    }

}
