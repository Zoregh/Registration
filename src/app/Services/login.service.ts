import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router: Router) { }

  public usrDabro: Boolean = false;
  public storedBase = JSON.parse(localStorage.getItem('users'));

  tryLogin(a,b) {
    const user = this.storedBase.find(u => u.email == a || u.phone == a);
    if (!user) {
      alert("Please, Sign Up at first.");
      return;
    }
    if (user.password != b) {
      alert("Wrong password");
      return;
    }
    this.usrDabro = true;
    this.router.navigate(['/home']);
  }


}
