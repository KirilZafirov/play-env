import {Component} from '@angular/core';
import { EnvConfig } from './env-config/env-config.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
  constructor(private envConfig: EnvConfig) {
    console.log(this.envConfig);
  }

}
