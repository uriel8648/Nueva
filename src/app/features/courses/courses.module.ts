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
import { CssCourseComponent } from './css/css-course.component';
import { JavaCourseComponent } from './java/java-course.component';
import { RouterModule } from '@angular/router';
import { JavaScriptCourseComponent } from './javascript/javascript-course.component';
import { JQueryCourseComponent } from './jquery/jquery-course.component';
import { SqlCourseComponent } from './sql/sql-course.component';
import { AppModule } from '../../app.module';

@NgModule({
  declarations: [
    
    CssCourseComponent,
    JavaCourseComponent,
    JavaScriptCourseComponent,
    JQueryCourseComponent,
    SqlCourseComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    RouterModule,
    CssCourseComponent,
    JavaCourseComponent,
    JavaScriptCourseComponent,
    JQueryCourseComponent,
    SqlCourseComponent

  ]
})
export class CoursesModule { }
