import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-web-worker-example',
  templateUrl: './web-worker-example.component.html',
  styleUrls: ['./web-worker-example.component.scss']
})
export class WebWorkerExampleComponent implements OnInit , OnDestroy {
  entryValue: number;
  output;
  private webWorker: Worker;
  constructor() { }

  ngOnInit() {
    if (typeof Worker !== 'undefined') {
      this.webWorker = new Worker('./my-worker.worker.ts', { type: 'module' });
      this.webWorker.onmessage = ({ data }) => {
        this.output = data;
      };
   }
  }

  calcFib() {
    this.webWorker.postMessage(this.entryValue);
  }

  ngOnDestroy(): void {
    this.webWorker.terminate();
  }
}
