import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserService } from '../services/users.service';
import { UsersActions } from './actions-tyle';
import { concatMap, switchMap, map} from 'rxjs/operators'




@Injectable({providedIn:'root'})
export class UsersEffects {

    constructor(    private actions$: Actions,
                    private userSerice: UserService){
                        
                }


    loadUusers$ = createEffect( ()=>
        this.actions$.pipe(
        ofType(UsersActions.loadUsers),
        map( _ => this.userSerice.getUsers()),
        map( users => UsersActions.usersLoaded({payload: users}))
    ));

}