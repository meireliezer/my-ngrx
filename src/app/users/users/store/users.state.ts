import { EntityState } from '@ngrx/entity';
import { User } from '../model/user.model';
import { adapter } from './users.adapter';


export interface UsersState extends EntityState <User> {
}

export const initialUserState = adapter.getInitialState();