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
import { HtmlCourseComponent } from './features/courses/html/html-course.component';
import { CssCourseComponent } from './features/courses/css/css-course.component';
import { SqlCourseComponent } from './features/courses/sql/sql-course.component';
import { JavaCourseComponent } from './features/courses/java/java-course.component';
import { JQueryCourseComponent } from './features/courses/jquery/jquery-course.component';
import { JavaScriptCourseComponent } from './features/courses/javascript/javascript-course.component';
import { RouterModule, Routes } from '@angular/router';

//Rutas adicionales 
import { AuthRoutingModule } from './features/auth/auth-routing.module';
import { CoursesRoutingModule } from './features/courses/courses-routing.module';





const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    AuthRoutingModule,
    CoursesRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
