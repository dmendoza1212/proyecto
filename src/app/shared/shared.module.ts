import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SlideComponent } from './slide/slide.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SlideComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [FooterComponent, HeaderComponent, SlideComponent]
})
export class SharedModule { }
