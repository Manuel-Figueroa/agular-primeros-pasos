import { Component } from '@angular/core';

@Component({
  selector:'app-counter',
  template:`
    <h3>Counter: {{counter}}</h3>
<button (click)="increseBy(1)">+1</button>
<button (click)="reset()">Reset</button>
<button (click)="increseBy(-1)">-1</button>
  `
})
export class counterComponet{
  public counter:number=10;

  increseBy(n:number):void{
    this.counter += n;
  }
  reset(){
    this.counter=10;
  }
}
