import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chat-room';

  showLogout = true;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  itemClicked(){
    this.router.navigateByUrl('/login');
    this.showLogout = false;

  }

}
