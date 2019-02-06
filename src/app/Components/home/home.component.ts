import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../Services/login.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public curntUser: any = this.usrService.curntUser;

  constructor(private usrService:LoginService) { }

  ngOnInit() {
  }

}
