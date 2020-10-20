import { createFeatureSelector, createSelector } from "@ngrx/store";
import { adapter } from './users.adapter';


export const usersFeatureSelector = createFeatureSelector('users');

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
  } = adapter.getSelectors();



// export const usersSelector = createSelector(
//     usersFeatureSelector,
//    (users:UsersSelector.UsersState) => {
//        return Object.values(users.entities)
//    }
// );

export const usersSelector = createSelector(
    usersFeatureSelector,
    selectEntities,
)