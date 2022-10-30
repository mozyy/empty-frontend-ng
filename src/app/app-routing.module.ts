import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout.component';
// import { LayoutComponent } from './layout/layout/layout.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'questions',
        loadChildren: () => import('./pages/questions/questions.module').then((m) => m.QuestionsModule),
      },
      { path: '**', component: PageNotFoundComponent },
    ],
  },
  // {
  //   path: 'login',
  //   loadChildren: () => import('./pages/login/login.module').then((m) => m.LoginModule),
  // },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    initialNavigation: 'enabledBlocking',
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
