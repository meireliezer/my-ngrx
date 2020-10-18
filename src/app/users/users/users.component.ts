import { Component, OnInit } from '@angular/core';
import { User } from './model/user.model';
import { UserService } from './services/users.service';
import { Store } from '@ngrx/store';
import { UsersState } from './store/users.reducer';
import { Observable} from 'rxjs';
import { tap} from 'rxjs/operators';
import { UsersActions } from './store/actions-tyle';
import { usersFeatureSelector, usersSelector } from './store/users.selectors';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public users: User[] = [];
  public users$: Observable<User[]>


  constructor(private usesService: UserService,
    private store: Store<UsersState>) {
      this.users = this.usesService.getUsers();
      this.users$ = this.store.select(usersSelector).pipe(tap(console.log));

      this.store.dispatch(UsersActions.loadUsers());
    
   }

  ngOnInit() {
  }

}
