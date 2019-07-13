import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { OperationBaseStore } from './store/operations/operation.base.store';
import { CoreDomainState } from './store/domain-states/core.domain-state';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CoreRoutingModule
  ]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        OperationBaseStore,
        CoreDomainState
      ]
    };
  }
 }
