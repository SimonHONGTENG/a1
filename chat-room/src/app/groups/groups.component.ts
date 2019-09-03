import { Component, OnInit } from '@angular/core';

import { Group } from '../entity';
import { GroupService } from '../group.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
  groups: Group[];

  constructor(private groupService: GroupService) { }

  ngOnInit() {
    this.getGroups();
  }

  getGroups(): void {
    this.groupService.getGroups()
    .subscribe(groups => this.groups = groups);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.groupService.addGroup({ name } as Group)
      .subscribe(group => {
        // console.log(group);
        this.groups.push(group);
      });
  }

  delete(group: Group): void {
    this.groups = this.groups.filter(g => g !== group);
    this.groupService.deleteGroup(group).subscribe();
  }

}