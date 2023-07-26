import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LoaderComponent } from './common/loader/loader.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LoaderComponent
  ]
})
export class CoreModule { }
