import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SinhvienComponent } from './sinhvien/sinhvien.component';
import { ProductComponent } from './product/product.component';
import { SortPipe } from './app.sort';

@NgModule({
  declarations: [
    SortPipe,
    AppComponent,
    SinhvienComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path : 'sinhvien', 
        component : SinhvienComponent
      },
      {
        path : 'product', 
        component : ProductComponent
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
