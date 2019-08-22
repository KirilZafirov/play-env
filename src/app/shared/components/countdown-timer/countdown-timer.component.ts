import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, merge, timer, NEVER } from 'rxjs';
import { CountdownStateService } from './countdown-timer.state';
import { mapTo, sample, withLatestFrom, map, takeWhile, switchMap, share, filter } from 'rxjs/operators';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.scss']
})
export class CountdownTimerComponent implements OnInit {

  constructor(private countDownState: CountdownStateService) { }

  ngOnInit() {
  
  }

}
