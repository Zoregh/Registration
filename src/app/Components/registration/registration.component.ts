import { Component, OnInit } from '@angular/core';
import { User } from '../../Models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  public emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  public phoneRegex = /[0-9]{3}\d{8}/;
  public users: Array<any> = [];
  public user: User = new User();

  constructor(private router: Router) { }

  ngOnInit() {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      this.users = JSON.parse(storedUsers);
    }
  }
  submit(MyForm) {
    this.user.name = MyForm.value.name;
    this.user.email = MyForm.value.email;
    this.user.phone = MyForm.value.phone;
    this.user.password = MyForm.value.password;
    if (!this.user.checkFields()) {
      alert("please fill Phone or Email fields");
      return;
    }
    if(this.users.map(function(e) { return e.email; }).indexOf(this.user.email) == -1 &&
    this.users.map(function(e) { return e.phone; }).indexOf(this.user.phone) == -1) {
        this.users.push(this.user);
        alert("Mka du gracvuk es umud jan !")
    } else {
      alert("Gya du arden grancvuk es gya!");
      return;
    }
    const jsonedUsers = JSON.stringify(this.users);
    localStorage.setItem('users', jsonedUsers);

    this.router.navigate(['/']);
  }

}
