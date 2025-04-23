import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { increment, decrement, reset } from './counter.actions';

@Injectable()
export class CounterEffects {
  constructor(private actions$: Actions) {
    console.log('Constructor running', this.actions$);
  }

  logActions$ = createEffect(() =>
      this.actions$.pipe(
        ofType(increment, decrement, reset),
        tap(action => console.log('Action dispatched:', action.type))
      ),
  );

}