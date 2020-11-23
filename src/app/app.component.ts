import { Component } from '@angular/core';
import { CallbackDataParams } from 'echarts/types/dist/echarts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'echarts13541';
  constructor() {
    const labelFormatter = (info: CallBackDataParams) => '<div>Test</div>';
  }
}
