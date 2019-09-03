import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string
  constructor() { }

  ngOnInit() {
  }

  itemClicked(){

    //TODO
    localStorage.setItem('currentUser',"OK");
  }

}
