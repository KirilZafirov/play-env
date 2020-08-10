import { Component, OnInit, Input, ContentChild, TemplateRef, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-select' ,
    templateUrl: './select.component.html',
    styleUrls: ['./select.component.scss']
})
export class DynamicSelectComponent {

  picked: string;

  @Input() label: string;
  @Input() options: string[];
  @Output() selectionChanged = new EventEmitter<string>();

  @ContentChild('selectedTemplate') selectedTemplateRef: TemplateRef<any>;
  @ContentChild('optionTemplate') optionTemplateRef: TemplateRef<any>;

  selectOption(option: string) {
    this.picked = option;
    this.selectionChanged.emit(option);
  }
}

