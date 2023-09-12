import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomLabelDirective } from './directives/custom-label.directive';



@NgModule({
  declarations: [
    CustomLabelDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    // exportamos la directiva para usarla fuera del modulo
    CustomLabelDirective
  ]
})
export class SharedModule { }
