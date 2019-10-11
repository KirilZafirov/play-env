import { ElementIds } from './../../counter-element-ids';
import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { CounterState } from '../../counter-state-interface';
import { map, first } from 'rxjs/operators';

@Component({
  selector: 'app-counter-view',
  templateUrl: './counter-view.component.html',
  styleUrls: ['./counter-view.component.scss'] , 
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterViewComponent implements OnInit {
  elementIds = ElementIds;

  private stateSubject : ReplaySubject<CounterState> = new ReplaySubject<CounterState>(1);
  state$ = this.stateSubject.asObservable();

  @Input()
  set state(c: CounterState) {
    this.stateSubject.next(c);
  }

  @Output()
  btnStart = new EventEmitter<Event>();
  @Output()
  btnPause = new EventEmitter<Event>();
  @Output()
  btnUp = new EventEmitter<Event>();
  @Output()
  btnDown = new EventEmitter<Event>();
  @Output()
  btnReset = new EventEmitter<Event>();
  @Output()
  btnSetTo = new EventEmitter<Event>();
  @Output()
  inputTickSpeed = new EventEmitter<Event>();
  @Output()
  inputCountDiff = new EventEmitter<Event>();
  @Output()
  inputSetTo = new EventEmitter<Event>();
 
  initialSetToValue$ = this.state$.pipe(
    first(),
    map( s => s.count)
  );

  isTicking$ = this.state$.pipe( 
    map( s => s.isTicking)
  );
  countUp$ = this.state$.pipe(
    map( s => s.countUp)
  )
  constructor() { }

  ngOnInit() {
  
  }

}
