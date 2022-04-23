import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageComponent } from './manage.component';
import { SourceComponent } from './source/source.component';
import { SourcesComponent } from './sources/sources.component';

const routes: Routes = [
  {
    path: '',
    component: ManageComponent,
    children: [
      { path: 'source', component: SourceComponent },
      { path: 'sources', component: SourcesComponent },
      { path: '', redirectTo: 'source', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageRoutingModule { }
