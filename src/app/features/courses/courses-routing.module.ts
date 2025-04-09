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

//Componentes
import { RouterModule, Routes } from '@angular/router';
import { HtmlCourseComponent } from './html/html-course.component';
import { CssCourseComponent } from './css/css-course.component';
import { SqlCourseComponent } from './sql/sql-course.component';
import { JavaCourseComponent } from './java/java-course.component';
import { JQueryCourseComponent } from './jquery/jquery-course.component';
import { JavaScriptCourseComponent } from './javascript/javascript-course.component';

const routes: Routes = [
  {path: 'html-course', component: HtmlCourseComponent},
  {path: 'css-course', component: CssCourseComponent},
  {path: 'sql-course', component: SqlCourseComponent},
  {path: 'java-course', component: JavaCourseComponent},
  {path: 'jquery-course', component: JQueryCourseComponent},
  {path: 'javascript-course', component: JavaScriptCourseComponent},
 
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CoursesRoutingModule { }
