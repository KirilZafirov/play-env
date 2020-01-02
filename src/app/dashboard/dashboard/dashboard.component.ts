import { Component, QueryList, ViewChildren, OnInit, TemplateRef, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl , FormBuilder } from '@angular/forms';
import { ActiveDescendantKeyManager } from '@angular/cdk/a11y';
import { ENTER, A } from '@angular/cdk/keycodes';
import { OptionComponent } from '@app/shared/autocomplete/option/option.component';
import { PopoverService } from '@app/shared/components/popover/popover.service';

export interface Operator {
  sign: string;
  position: number;
  priority: number;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit , AfterViewInit {

  @ViewChildren(OptionComponent) items: QueryList<OptionComponent>;
  private keyManager: ActiveDescendantKeyManager<OptionComponent>;
  control = new FormControl();
  model = '';
  constructor(private popper: PopoverService) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.keyManager = new ActiveDescendantKeyManager(this.items).withWrap()
      .withTypeAhead();
  }

  onKeydown(event) {
    if (event.keyCode === ENTER) {
      this.model = this.keyManager.activeItem.value;
    } else {
      this.keyManager.onKeydown(event);
    }
  }

  show(content: TemplateRef<any>, origin) {
    const ref = this.popper.open<{ skills: number[] }>({
      content,
      //  content: 'Hello world!',
      // content: InsidePopoverComponent,
      origin,
      width: '200px',
      data: {
        skills: [1, 2, 3]
      }
    });

    ref.afterClosed$.subscribe(res => {
      console.log(res);
    });

  }
}
