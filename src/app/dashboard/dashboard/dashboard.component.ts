import { Component, QueryList, ViewChildren, OnInit, TemplateRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FocusKeyManager, ActiveDescendantKeyManager } from '@angular/cdk/a11y';
import { ENTER, A } from '@angular/cdk/keycodes';
import { OptionComponent } from '@app/shared/autocomplete/option/option.component';
import { PopoverService } from '@app/shared/components/popover/popover.service';
import { InsidePopoverComponent } from '@app/shared/components/popover/inside-popover/inside-popover.component';
import { of, Observable, pipe, combineLatest } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @ViewChildren(OptionComponent) items: QueryList<OptionComponent>;

  constructor(private popper: PopoverService) {
  }
   
  ngOnInit() { }

  options = [
    { id: 1, label: 'One' },
    { id: 2, label: 'Two' },
    { id: 3, label: 'Three' },
    { id: 4, label: 'Four' },
    { id: 5, label: 'Five' },
    { id: 6, label: 'Six' },
    { id: 7, label: 'Seven' },
    { id: 8, label: 'Eight' },
    { id: 9, label: 'Nine' },
    { id: 10, label: 'Ten' },
    { id: 11, label: 'Eleven' },
  ];
  control = new FormControl();

  private keyManager: ActiveDescendantKeyManager<OptionComponent>;
  model = '';

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
    })

  }
}
