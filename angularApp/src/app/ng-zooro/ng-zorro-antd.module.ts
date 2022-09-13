
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
 
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu'; 
import { IconsProviderModule } from '../icons-provider.module';
@NgModule({
  exports: [
    NzLayoutModule,
    NzMenuModule, 
    IconsProviderModule,
    ReactiveFormsModule
  ]
})
export class NgZorroAntdModule {

}
