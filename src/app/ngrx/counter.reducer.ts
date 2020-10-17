import { createReducer, on } from '@ngrx/store';
import { CounterActions } from './action-types';
 
export const initialState = 0;
 
const _counterReducer = createReducer(
  initialState,
  on(CounterActions.increment, (state) => state + 1),
  on(CounterActions.decrement, (state) => state - 1),
  on(CounterActions.reset, (state, couter) => couter.counter)
);
 
export function counterReducer(state, action) {
  return _counterReducer(state, action);
}