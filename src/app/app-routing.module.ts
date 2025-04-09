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
import { AppModule } from './app.module';
import { HomeComponent } from './features/home/home.component';
import { LoginComponent } from './features/auth/login/login.component';





const routes: Routes = [
  { path: 'courses/html', component: HtmlCourseComponent },
  { path: 'courses/css', component: CssCourseComponent },
  { path: 'courses/sql', component: SqlCourseComponent },
  { path: 'courses/java', component: JavaCourseComponent },
  { path: 'courses/jquery', component: JQueryCourseComponent },
  { path: 'courses/javascript', component: JavaScriptCourseComponent },
  { path: 'login', component: LoginComponent }, 
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
