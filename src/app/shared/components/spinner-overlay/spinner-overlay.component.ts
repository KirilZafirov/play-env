import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-spinner-overlay',
  templateUrl: './spinner-overlay.component.html',
  styleUrls: ['./spinner-overlay.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpinnerOverlayComponent implements OnInit {
  @Input() public message: string;

  constructor() { }

  ngOnInit() {
  }

}
