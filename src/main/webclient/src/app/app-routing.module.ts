import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlashListComponent} from './flash-list/flash-list.component';
import {ApiComponent} from './api/api.component';

const routes: Routes = [
  { path: 'api/flash', component: FlashListComponent},
  { path: 'api', component: ApiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
