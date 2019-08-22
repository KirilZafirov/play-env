import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountdownStateService {
  constructor() { }

  latestTimer$ = new BehaviorSubject(1500);

  initialDuration$ = new BehaviorSubject(1500);

}
