import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guard/guard';
import { HomeComponent } from './component/home/home.component';
import { Home1Component } from './component/home1/home1.component';
import { LayoutComponent } from './layout.component';

const routes: Routes = [{
  path: '',
  canActivate: [AuthGuard],
  component: LayoutComponent,
  children: [{ path: 'home', component: HomeComponent },
  { path: 'home1', component: Home1Component },
  { path: '', redirectTo: '/home', pathMatch: 'full' },]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
