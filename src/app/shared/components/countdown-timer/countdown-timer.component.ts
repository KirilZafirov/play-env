import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CounterFacadeService } from './counter-facade-interface';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.scss'] ,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountdownTimerComponent implements OnInit {

  constructor(public facade: CounterFacadeService) { }

  ngOnInit() {
  
  }

}
