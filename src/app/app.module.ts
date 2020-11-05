import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import * as echarts from 'echarts';
import { NgxEchartsModule } from 'ngx-echarts';
import { AppComponent } from './app.component';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxEchartsModule.forRoot({echarts}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
