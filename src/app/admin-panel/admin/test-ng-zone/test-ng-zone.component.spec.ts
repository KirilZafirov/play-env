import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestNgZoneComponent } from './test-ng-zone.component';

describe('TestNgZoneComponent', () => {
  let component: TestNgZoneComponent;
  let fixture: ComponentFixture<TestNgZoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestNgZoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestNgZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
