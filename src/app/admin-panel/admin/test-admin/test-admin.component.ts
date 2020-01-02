import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-test-admin',
  templateUrl: './test-admin.component.html',
  styleUrls: ['./test-admin.component.scss']
})
export class TestAdminComponent implements OnInit {
  counter: number;
  constructor(private cdr: ChangeDetectorRef) {
     cdr.detach();
  }

  ngOnInit() {
    this.counter = 0;
    this.cdr.detectChanges();
  }

  incrementCounter() {
    this.counter++;
    // This will detect changes to this component only
    // this.cdr.reattach();
    // This will detect changes to this component and its children
    this.cdr.detectChanges();
  }
}
