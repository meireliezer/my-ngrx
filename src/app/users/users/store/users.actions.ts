import { createAction, props } from "@ngrx/store";
import { User } from '../model/user.model';

export const loadUsers = createAction('[User component] load users');
export const usersLoaded = createAction('[User component] users loaded', props<{payload:User[]}>());
export const addUser = createAction('[User component] add user', props<User>());
export const deleteUser = createAction('[User componet] delete user', props<{id:number}>());
export const updateUser = createAction('[update component] update user', props<User>());
export const removeAll =  createAction('[User component] remove all');
