import { createAction, props } from '@ngrx/store';
import { Counter } from '../counter.model';

export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset', props<Counter>());
export const nopy = createAction('[Counter Component] nopy');





