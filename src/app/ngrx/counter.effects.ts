import { Injectable, ɵSWITCH_COMPILE_INJECTABLE__POST_R3__ } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap, catchError, withLatestFrom, concatMap, map, filter } from 'rxjs/operators';
import { EMPTY, of} from 'rxjs';
``
import { CounterActions } from './action-types';
import { Store } from '@ngrx/store';
import { ICountState } from './counter.state';
import { Counter } from '../counter.model';



@Injectable()
export class CounterEffects {
 
  counter$ = createEffect(() => this.actions$.pipe(
    ofType(CounterActions.reset),
    tap(console.log),
    catchError(() => EMPTY)
  ), {dispatch: false});
 

  inc$ = createEffect(() => this.actions$.pipe(
    ofType(CounterActions.increment),
    tap(console.log),
    catchError(() => EMPTY),
    tap(console.log),
    concatMap(action => of(action).pipe(
      withLatestFrom(this.store.select('count')),
      map( ([action, count] )=> (count >= 10)? CounterActions.reset(new Counter(1)) : CounterActions.nopy()))
      ) 
    )      
  );


  constructor(
    private actions$: Actions,
   private store: Store<ICountState>
  ) {}
}