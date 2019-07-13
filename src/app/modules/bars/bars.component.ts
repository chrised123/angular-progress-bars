import { Component, OnInit } from '@angular/core';
import { BarsViewState } from './store/view-states/bars.view-state';
import { BarDataOperationStore } from './store/operations/barData.operation-store';

@Component({
  selector: 'app-bars',
  templateUrl: './bars.component.html',
})
export class BarsComponent implements OnInit {
  constructor(
    public viewState: BarsViewState,
    public operation: BarDataOperationStore
  ) { }

  ngOnInit() {
    this.operation.start();
  }

}
