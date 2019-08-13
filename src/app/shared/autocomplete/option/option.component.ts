import { Component, OnInit, ChangeDetectionStrategy, Input, ElementRef, HostBinding } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { mapTo } from 'rxjs/operators';
@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./option.component.scss']
})
export class OptionComponent implements OnInit {

  @Input() value: string ;
  @Input() disabled = false;
  private _isActive = false;

  @HostBinding('class.active') get isActive() {
    return this._isActive;
  };
  
  click$: Observable<string>;
  constructor(private host: ElementRef) { }

  ngOnInit() {
    this.click$ = fromEvent(this.element, 'click').pipe(mapTo(this.value));
  }

  get element() {
    return this.host.nativeElement;
  }

  
  setActiveStyles() {
    this._isActive = true;
  };

  setInactiveStyles() {
    this._isActive = false;
  }

  getLabel() {
    return this.value;
  }

}
