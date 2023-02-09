import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './material.module';

@NgModule({
  // modules
  imports: [CommonModule, ReactiveFormsModule, MaterialModule],
  // components, directives, pipes
  declarations: [],
  // modules & components, directives, pipes
  exports: [CommonModule, ReactiveFormsModule, MaterialModule]
})
export class SharedModule {}
