import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EquipmentValueService } from './services/equipment-value.service';

@NgModule({
  // modules
  imports: [CommonModule, HttpClientModule, RouterModule],
  // core components
  declarations: [],
  // guards, interceptors, services
  providers: [EquipmentValueService],
  // core components
  exports: []
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}
