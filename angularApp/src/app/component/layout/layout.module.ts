import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { NgZorroAntdModule } from 'src/app/ng-zooro/ng-zorro-antd.module';
import { IconsProviderModule } from 'src/app/icons-provider.module';
import { HomeComponent } from './component/home/home.component';
import { Home1Component } from './component/home1/home1.component';


@NgModule({
  declarations: [
    LayoutComponent,
    HomeComponent,
    Home1Component
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    NgZorroAntdModule
  ]
})
export class LayoutModule { }
