import { Component } from "@angular/core";

@Component({
  selector: 'counter',
  template: `
    <div class="content">
        <button (click)="increment()">+</button>
        <button (click)="decrement()">-</button>
        <button (click)="reset()">Reset</button>
        <h3>{{counter$ | async}}</h3>
    </div>
    `
})
export class CounterComponent {

  constructor() {

  }

  increment() {
  }

  decrement() {
  }

  reset() {
  }
}
