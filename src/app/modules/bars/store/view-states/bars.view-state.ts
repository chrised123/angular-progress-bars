import { Injectable } from '@angular/core';
import { autorun, observable, action, reaction } from 'mobx';
import { Operations } from '../../../../shared/commons/constants/global.constant';
import { BarDataOperationStore } from '../operations/barData.operation-store';
import { Bars } from '../view-models/bars.view-model';
@Injectable()
export class BarsViewState {
  @observable bars: Bars;
  @observable selectedBar: number;
  isBarView: boolean;
  isLoading = true;
  constructor(
    private fetchBarDataOperation: BarDataOperationStore,
  ) {
    this.selectedBar = 0;
    this.isBarView = true;
    reaction(
      () =>
        (this.fetchBarDataOperation.operation === Operations.completed &&
          this.fetchBarDataOperation.data) ||
        (this.fetchBarDataOperation.operation === Operations.error &&
          this.fetchBarDataOperation.error),
      () => {
        if (this.fetchBarDataOperation.error) {
          console.log('error error error');
        } else if (this.fetchBarDataOperation.data) {
          // Keep this.isLoading to true to see the loading bar. Currently it wont be visible because
          // I am doing an ngif to check whether data is available.
          this.isLoading = false;
          this.bars = new Bars(this.fetchBarDataOperation.data);
        }
      }
    );
  }

  alterValue = (value) => {
    const newValue = this.bars.bars[this.selectedBar] + value;
    // This is commented for now because the requirement allows the value to exceed above the limit
    // if ( newValue > this.bars.limit ) {
    //   this.bars.bars[this.selectedBar] = this.bars.limit;
    // } else
    if ( newValue < 0 ) {
      this.bars.bars[this.selectedBar] = 0;
    } else {
      this.bars.bars[this.selectedBar] = newValue;
    }

  }

  selectBar = (index) => {
    console.log('test');
    this.selectedBar = index;
  }

  toggleView = () => {
    this.isBarView = !this.isBarView;
  }
}
