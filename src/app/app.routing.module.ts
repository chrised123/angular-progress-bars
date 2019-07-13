import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: 'app', loadChildren: './core/core.module#CoreModule' },
  { path: '', redirectTo: 'app', pathMatch: 'prefix' },
  { path: '404', loadChildren: './modules/notfound/notfound.module#NotfoundModule' },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
