
import { NgModule } from '@angular/core';
import { counterComponet } from './counter/counter.component';

@NgModule({
  declarations:[
    counterComponet
  ],
  exports:[
    counterComponet
  ]
})
export class CounterModule{

}
