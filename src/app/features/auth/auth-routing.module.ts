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
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

//Componentes
import { LoginComponent } from './login/login.component';

const routes: Routes=[
  { path: 'login', component: LoginComponent },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
