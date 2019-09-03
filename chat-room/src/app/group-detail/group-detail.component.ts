import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Group,User }         from '../entity';
import { UserService }  from '../user.service';
@Component({
  selector: 'app-group-detail',
  templateUrl: './group-detail.component.html',
  styleUrls: ['./group-detail.component.css']
})
export class GroupDetailComponent implements OnInit {
  @Input() group: Group;

  users;

  constructor(    private route: ActivatedRoute,
    private userService: UserService,
    private location: Location) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers()
    .subscribe(users => this.users = users);
  }

  add(name: string, email: string): void {
    name = name.trim();
    email = email.trim();
    if (!name) { return; }
    this.userService.addUser({ name, email } as User)
      .subscribe(user => {
        // console.log(group);
        this.users.push(user);
      });
  }

  delete(user: User): void {
    this.users = this.users.filter(g => g !== user);
    this.userService.deleteUser(user).subscribe();
  }

}
