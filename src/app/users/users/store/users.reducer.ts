import { createReducer, on } from '@ngrx/store';
import { UsersActions } from './actions-tyle';
import { adapter } from './users.adapter';
import { initialUserState, UsersState } from './users.state';





const _usersReducer =  createReducer<UsersState> (
    initialUserState,
    on(UsersActions.usersLoaded,
     (state, action:any) =>  adapter.addAll(action.payload, state) )
    );


export function usersReducer(state, action) {
    return _usersReducer(state, action);
}
    
