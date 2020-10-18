import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as UsersSelector from "./users.reducer";
import { EntityState } from '@ngrx/entity';


export const usersFeatureSelector = createFeatureSelector('users');

// export const usersSelector = createSelector(
//     usersFeatureSelector,
//    (users:UsersSelector.UsersState) => {
//        return Object.values(users.entities)
//    }
// );

export const usersSelector = createSelector(
    usersFeatureSelector,
    UsersSelector.selectEntities,
)