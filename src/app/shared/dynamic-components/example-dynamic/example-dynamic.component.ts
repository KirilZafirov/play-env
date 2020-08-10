import { Component, OnInit, ViewChild, TemplateRef, AfterViewInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-example-dynamic',
  templateUrl: './example-dynamic.component.html',
  styleUrls: ['./example-dynamic.component.scss']
})
export class ExampleDynamicComponent implements OnInit , AfterViewInit {
  @ViewChild('helloTemplate') helloTemplate: TemplateRef<any>;
  constructor(private viewContainer: ViewContainerRef) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    //  this.viewContainer.createEmbeddedView(this.helloTemplate);
  }
}
