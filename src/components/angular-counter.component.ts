import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-angular-counter',
  standalone: true,
  imports: [NgIf],
  template: `
    <div class="card bg-primary text-base-content w-fit p-4">
      Angular Counter my name is {{name}}
      <span class="countdown font-mono text-6xl">
        <span style="--value:{{counter}}"></span>
      </span>
      <div class="flex gap-2">
        <button
          class="btn btn-circle"
          (click)="add()"
        >
          +
        </button>
        <button
          class="btn btn-circle"
          (click)="substract()"
        >
          -
        </button>
      </div>
    </div>
  `,
})
export class AngularCounterComponent {
    @Input() name = 'Merlo';

    counter = 0
    
    add() {
        this.counter+=1
    }

    substract() {
        this.counter-+1
    }

}