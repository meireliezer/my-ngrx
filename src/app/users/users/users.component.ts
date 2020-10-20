import { Component, OnInit } from '@angular/core';
import { User } from './model/user.model';
import { UserService } from './services/users.service';
import { Store } from '@ngrx/store';
import { UsersState } from './store/users.state';
import { Observable} from 'rxjs';
import { tap, map} from 'rxjs/operators';
import { UsersActions } from './store/actions-tyle';
import { usersFeatureSelector, usersSelector } from './store/users.selectors';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public users: User[] = [];
  public users$: Observable<User[]>
  public userForm: FormGroup;
  public fromVaild$: Observable<boolean>;


  constructor(private usesService: UserService,
              private formBuilder: FormBuilder,
              private store: Store<UsersState>) {
      this.users = this.usesService.getUsers();
      this.users$ = this.store.select(usersSelector).pipe(
        tap(console.log),
        map(userMap =>  Object.values(userMap))
        )

        this.userForm = this.formBuilder.group({
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          age: ['', Validators.required]
        });

        this.userForm.valueChanges.subscribe(console.log);
        this.fromVaild$ = this.userForm.statusChanges.pipe(
          map( status =>  status === 'VALID')
        );
    
   }

  ngOnInit() {
    this.store.dispatch(UsersActions.loadUsers());
  }

  public clear(){
    this.userForm.reset();
  }

}
