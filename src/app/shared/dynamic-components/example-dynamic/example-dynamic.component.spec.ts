import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleDynamicComponent } from './example-dynamic.component';

describe('ExampleDynamicComponent', () => {
  let component: ExampleDynamicComponent;
  let fixture: ComponentFixture<ExampleDynamicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleDynamicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
