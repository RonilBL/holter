import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';

const routes: Routes = [


  { path: 'login', component: LoginComponent },
  { path: '', loadChildren: () => import('./component/layout/layout.module').then(m => m.LayoutModule) },
  { path: '**', redirectTo: '' }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
