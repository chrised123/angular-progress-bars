import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: 'bars', loadChildren: '../modules/bars/bars.module#BarsModule' },
  { path: '', redirectTo: 'bars', pathMatch: 'prefix'},
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
