import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../Services/login.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private curntUser: any = this.usrService.curntUser;
  public date: any = new Date();

  constructor(private usrService:LoginService, private router:Router) { }

  ngOnInit() {
  }

  logOut() {
    this.usrService.curntUser = false;
    this.usrService.usrDabro = false;
    this.router.navigate(['/']);
  }

}
