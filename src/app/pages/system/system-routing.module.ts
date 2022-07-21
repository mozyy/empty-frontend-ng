import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DocsComponent } from './docs/docs.component';
import { SystemComponent } from './system.component';
import { ResourceComponent } from './resource/resource.component';
import { RoleComponent } from './role/role.component';

const routes: Routes = [
  {
    path: '',
    component: SystemComponent,
    children: [
      { path: 'resource', component: ResourceComponent },
      { path: 'dash', component: DashboardComponent },
      { path: 'docs', component: DocsComponent },
      { path: 'role', component: RoleComponent },
      { path: '', redirectTo: 'resource', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SystemRoutingModule { }
