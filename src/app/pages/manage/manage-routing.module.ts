import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageComponent } from './manage.component';
import { SourceComponent } from './source/source.component';

const routes: Routes = [
  {
    path: '',
    component: ManageComponent,
    redirectTo: 'source',
    children: [
      { path: 'source', component: SourceComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageRoutingModule { }
