import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { debounceTime, map } from 'rxjs/operators';

export interface Operator {
  sign: string; 
  position: number;
  priority: number;
}

@Component({
  selector: 'app-temperature-converter',
  templateUrl: './temperature-converter.component.html',
})
export class TemperatureConverterComponent implements OnInit {

  constructor( private fb: FormBuilder) {
  }
  customerForm: FormGroup;
  celsius : Observable<number>;
  fahrenheit : Observable<number>;

  ngOnInit() {  
    
    this.customerForm = this.fb.group({
      celsius: [null, [Validators.required]],
      fahrenheit: [null, [Validators.required]]
    });
    this.customerForm.get("celsius").valueChanges.pipe(
      debounceTime(300) ,
      map( value => (value * 1.8) + 32) 
    ).subscribe( val => {
      this.customerForm.get("fahrenheit").patchValue(val, {emitEvent: false})
    })

    this.customerForm.get("fahrenheit").valueChanges.pipe(
      debounceTime(300) ,
      map( value => (value - 32) / 1.8 ) 
    ).subscribe( val => {
      this.customerForm.get("celsius").patchValue(val, {emitEvent: false})
    })
  }
  
}