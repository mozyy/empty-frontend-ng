import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { NewsDetailComponent } from './pages/news-detail/news-detail.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { ManageComponent } from './pages/manage/manage.component';
import { SourceComponent } from './pages/manage/source/source.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'newsDetail/:link',
        component: NewsDetailComponent,
      },
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'manage',
        loadChildren: () => import('./pages/manage/manage.module').then((m) => m.ManageModule),
      },
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
