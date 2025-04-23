import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from '../../state/counter.actions';
import { getCount } from '../../state/counter.selectors';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  standalone: false,
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  count$: Observable<number>;

  constructor(private store: Store) {
    this.count$ = this.store.select(getCount);
  }

  onIncrement() {
    this.store.dispatch(increment());
  }

  onDecrement() {
    this.store.dispatch(decrement());
  }

  onReset() {
    this.store.dispatch(reset());
  }
}
