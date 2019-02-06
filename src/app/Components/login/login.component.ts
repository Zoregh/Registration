import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:LoginService) { }

  ngOnInit() {
  }

  submit(authForm) {
    this.service.tryLogin(authForm.value.login,authForm.value.password);
  }

}
