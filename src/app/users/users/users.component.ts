import { Component, OnInit } from '@angular/core';
import { User } from './model/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public users: User[] = [];


  constructor() {
    this.users.push( new User('Meir', 'Eliezer', 47));
    this.users.push( new User('Miri', 'Bahari', 49));
    this.users.push( new User('Rachel', 'Marcus', 45));

   }

  ngOnInit() {
  }

}
