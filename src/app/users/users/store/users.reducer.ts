import { User } from '../model/user.model';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { UsersActions } from './actions-tyle';


export interface UsersState extends EntityState <User> {
}


export const adapter = createEntityAdapter<User>();

export const initialUserState = adapter.getInitialState();


const _usersReducer =  createReducer (
    initialUserState,
    on(UsersActions.usersLoaded,
     (state, action:any) =>  adapter.addAll(action.payload, state) )
    );


export function usersReducer(state, action) {
    return _usersReducer(state, action);
}
    
