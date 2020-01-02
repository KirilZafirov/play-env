import { Component, OnInit, NgZone } from '@angular/core';

@Component({
  selector: 'app-test-ng-zone',
  templateUrl: './test-ng-zone.component.html',
  styleUrls: ['./test-ng-zone.component.scss']
})
export class TestNgZoneComponent implements OnInit {
  data = 0;
  done: string | number;
  constructor(private ngZone: NgZone) { }

  ngOnInit() {
  }

  processInsideZone() {
      if (this.data >= 10) {
        this.done = 'Done';
      } else {
        this.data += 1 ;
      }
  }
  processOutsideZone() {
      this.ngZone.runOutsideAngular(() => {
          if (this.data >= 10) {
              this.ngZone.run(() => {this.done = 'Done'; } );
          } else {
            this.data += 1 ;
          }
      });
  }
}
