import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RiesgoComponent } from './riesgo/riesgo.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RiesgoComponent],
  imports: [CommonModule, FormsModule],
})
export class ViewsModule { }
