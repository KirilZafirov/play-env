import { Component, OnInit, ViewChild, TemplateRef, ContentChild, QueryList, ContentChildren } from '@angular/core';
import { AutocompleteContentDirective } from '../autocomplete-content.directive';
import { OptionComponent } from '../option/option.component';
import { switchMap } from 'rxjs/operators';
import { merge } from 'rxjs';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
  exportAs: 'appAutocomplete',
})
export class AutocompleteComponent implements OnInit {
  @ViewChild('root', {static: false}) rootTemplate: TemplateRef<any>;
  
  @ContentChild(AutocompleteContentDirective,{static:false})
  content: AutocompleteContentDirective;

  @ContentChildren(OptionComponent ) options: QueryList<OptionComponent>;

  ngOnInit(){}

  optionsClick() {
    return this.options.changes.pipe(
      switchMap(options => {
        const clicks$ = options.map(option => option.click$);
        return merge(...clicks$);
      })
    );
  }

}
