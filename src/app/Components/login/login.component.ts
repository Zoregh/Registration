import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private login:any;
  private password:any;

  constructor(private service:LoginService) { }

  ngOnInit() {
  }

  submit(authForm) {
    this.login = authForm.value.login;
    this.password = authForm.value.password;
    this.service.tryLogin(this.login,this.password);
  }

}
