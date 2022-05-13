import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DocsComponent } from './docs/docs.component';
import { ManageComponent } from './manage.component';
import { SourceComponent } from './source/source.component';

const routes: Routes = [
  {
    path: '',
    component: ManageComponent,
    children: [
      { path: 'source', component: SourceComponent },
      { path: 'dash', component: DashboardComponent },
      { path: 'docs', component: DocsComponent },
      { path: '', redirectTo: 'source', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageRoutingModule { }
