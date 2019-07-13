import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarsComponent } from './bars.component';
import { BarsRoutingModule } from './bars-routing.module';
import { BarDataOperationStore } from './store/operations/barData.operation-store';
import { BarsViewState } from './store/view-states/bars.view-state';
import { BarService } from './store/services/barData.service';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { FormsModule } from '@angular/forms';
import { ProgressComponent } from './components/progress/progress.component';
import { SelectBarComponent } from './components/select-bar/select-bar.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [BarsComponent, ProgressComponent, SelectBarComponent],
  imports: [
    BarsRoutingModule,
    CommonModule,
    ProgressbarModule.forRoot(),
    FormsModule,
    SharedModule
  ],
  providers: [
    BarsViewState,
    BarDataOperationStore,
    BarService
  ]
})
export class BarsModule { }
