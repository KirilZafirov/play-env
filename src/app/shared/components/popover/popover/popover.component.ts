import { PopoverRef, PopoverContent } from './../popover-ref';
import { Component, OnInit, TemplateRef ,Type } from '@angular/core';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss']
})
export class PopoverComponent implements OnInit {
  renderMethod: 'template' | 'component' | 'text' = 'component';
  content: PopoverContent;
  context;

  constructor(private popoverRef: PopoverRef) {
  }

  ngOnInit() {
    this.content = this.popoverRef.content;

    if (typeof this.content === 'string') {
      this.renderMethod = 'text';
    }

    if (this.content instanceof TemplateRef) {
      this.renderMethod = 'template';
      this.context = {
        close: this.popoverRef.close.bind(this.popoverRef)
      }
    }

  }
}
