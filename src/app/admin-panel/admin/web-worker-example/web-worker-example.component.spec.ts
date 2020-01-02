import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebWorkerExampleComponent } from './web-worker-example.component';

describe('WebWorkerExampleComponent', () => {
  let component: WebWorkerExampleComponent;
  let fixture: ComponentFixture<WebWorkerExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebWorkerExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebWorkerExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
