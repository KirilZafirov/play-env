import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsidePopoverComponent } from './inside-popover.component';

describe('InsidePopoverComponent', () => {
  let component: InsidePopoverComponent;
  let fixture: ComponentFixture<InsidePopoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsidePopoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsidePopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
