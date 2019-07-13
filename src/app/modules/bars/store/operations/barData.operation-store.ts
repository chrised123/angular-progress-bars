import { Injectable } from '@angular/core';
import { OperationBaseStore } from 'src/app/core/store/operations/operation.base.store';
import { BarService } from '../services/barData.service';

@Injectable()
export class BarDataOperationStore extends OperationBaseStore {
  constructor(public service: BarService) {
    super();
  }

   onstart = () => {
    return new Promise((resolve, reject) => {
      this.service.fetchBarData().subscribe(
        (response) => {
          resolve(response);
        },
        response => {
          reject(response.error);
        }
      );
    });
  }
}
