import { Observable } from 'rxjs';
import { Component, QueryList, ViewChildren, OnInit, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActiveDescendantKeyManager } from '@angular/cdk/a11y';
import { ENTER, A } from '@angular/cdk/keycodes';
import { OptionComponent } from '@app/shared/autocomplete/option/option.component';
import { PopoverService } from '@app/shared/components/popover/popover.service';
import { getNextPrime , factorialSeq, fibonacciSeq, rangeSeq} from '../codewars/challenges';

export interface Operator {
  sign: string; 
  position: number;
  priority: number;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @ViewChildren(OptionComponent) items: QueryList<OptionComponent>;

  constructor(private popper: PopoverService , private fb: FormBuilder) {
  }
  
  customerForm: FormGroup;
  celsius : Observable<number>;
  fahrenheit : Observable<number>;
  ngOnInit() {  
    
    this.customerForm = this.fb.group({
      celsius: [null, [Validators.required]],
      fahrenheit: [null, [Validators.required]]
    });
  }
 

 triangle(entry){
 let dictionary = {"RR":"R","GG":"G","BB":"B","RG":"B","RB":"G","GR":"B","GB":"R","BR":"G","BG":"R"};
     while (entry.length > 1) {
        let n = '',
            c = 1;
        while (entry.length % (3 * c) == 1) c *= 3;
        for (let i = 0; i <entry.length - 1; i += c) n += dictionary[entry[i] + entry[i + c]];
       entry = n;
    }
    return entry;
  }
  
  mapColor=(first,second)=> {
    if(first === second) return first;
    if((first === "B" && second === "G") || 
       (first === "G" && second === "B")) return "R";
    if((first === "R" && second === "G") || 
       (first === "G" && second === "R" )) return "B";
    if((first === "B" && second === "R") || 
       (first === "R" && second === "B" )) return "G";
  }
 
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