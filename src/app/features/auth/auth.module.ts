/**
 * PLACEHOLDER FILE
 *
 * This file was generated as a placeholder because the following source files were not found:
 * - N/A
 *
 * Please locate the source files and re-run the migration or manually create this file.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: []
})
export class AuthModule { }
