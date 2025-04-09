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
import { AppComponent } from './app.component';
import { BrowserModule} from '@angular/platform-browser'
import { HomeModule } from './features/home/home.module';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { FooterComponent } from './components/footer/footer.component';
import { CoursesModule } from './features/courses/courses.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './features/home/home.component';

// Importar componentes de cursos
import { HtmlCourseComponent } from './features/courses/html/html-course.component';
import { CssCourseComponent } from './features/courses/css/css-course.component';
import { SqlCourseComponent } from './features/courses/sql/sql-course.component';
import { JavaCourseComponent } from './features/courses/java/java-course.component';
import { JQueryCourseComponent } from './features/courses/jquery/jquery-course.component';
import { JavaScriptCourseComponent } from './features/courses/javascript/javascript-course.component';
import { AuthModule } from './features/auth/auth.module';
import { AppRoutingModule } from './app-routing.module';

const routes: Routes = [
  { path: 'courses/html', component: HtmlCourseComponent },
  { path: 'courses/css', component: CssCourseComponent },
  { path: 'courses/sql', component: SqlCourseComponent },
  { path: 'courses/java', component: JavaCourseComponent },
  { path: 'courses/jquery', component: JQueryCourseComponent },
  { path: 'courses/javascript', component: JavaScriptCourseComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
   // HomeComponent

    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HomeModule,
  //  RouterModule.forRoot(routes),
    SharedModule,
    CoursesModule,
    ReactiveFormsModule,
    HttpClientModule,
    AuthModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
