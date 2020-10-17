import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {ICountState, CountState } from "./ngrx/counter.state"
import { Observable } from 'rxjs';
import { CounterActions } from './ngrx/action-types';
import { Counter } from './counter.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-ngrx';
  counter = 0;

  counter$: Observable<number>;

    constructor(private store: Store<ICountState>){
        this.counter$ = this.store.select('count');
    }


  public inc(){
    ++this.counter;
    this.store.dispatch(CounterActions.increment());
  }

  public red(){
    --this.counter;
    this.store.dispatch(CounterActions.decrement());
  }

  public reset(){
    this.counter = 0;
    this.store.dispatch(CounterActions.reset(new Counter(9)));
  }

}
