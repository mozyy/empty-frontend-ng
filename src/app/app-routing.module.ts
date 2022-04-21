import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'news',
        loadChildren: () => import('./pages/news/news.module').then((m) => m.NewsModule),
      },
      {
        path: 'manage',
        loadChildren: () => import('./pages/manage/manage.module').then((m) => m.ManageModule),
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'news',
      },
    ],
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then((m) => m.LoginModule),
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
