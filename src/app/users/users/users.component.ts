import { Component, OnInit } from '@angular/core';
import { User } from './model/user.model';
import { UserService } from './services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public users: User[] = [];


  constructor(private usesService: UserService) {
    this.users = this.usesService.getUsers();
    
   }

  ngOnInit() {
  }

}
