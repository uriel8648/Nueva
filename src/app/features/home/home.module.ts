import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { HomeComponent } from './home.component';
import { CourseCardComponent } from './components/course-card/course-card.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { HomeRoutingModule } from './home-routing.module';

/**
 * Home Feature Module
 * 
 * This module encapsulates all components related to the homepage functionality.
 * It includes:
 * - Main home component that serves as the container
 * - Course listing components
 * - Contact form component
 * 
 * The module uses lazy loading through the HomeRoutingModule which provides RouterModule.
 */
@NgModule({
  declarations: [
    HomeComponent,
    CourseCardComponent,
    CourseListComponent,
    ContactFormComponent
  ],
  imports: [
    SharedModule, // Provides CommonModule, FormsModule, ReactiveFormsModule
    HomeRoutingModule // Provides RouterModule and feature routing
  ],
  exports: [HomeComponent] 
})
export class HomeModule { }
