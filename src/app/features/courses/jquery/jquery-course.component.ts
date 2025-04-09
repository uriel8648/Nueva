import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/**
 * JQueryCourseComponent
 * 
 * This component displays a list of jQuery courses.
 * Migrated from the original JSP file to an Angular component.
 * 
 * Migration notes:
 * - Converted static HTML content to Angular component structure
 * - Moved inline styles to component-specific stylesheet
 * - Replaced direct link with Angular Router navigation
 * - Structured course data as a TypeScript interface and array
 */
@Component({
  selector: 'app-jquery-course',
  templateUrl: './jquery-course.component.html',
  styleUrls: ['./jquery-course.component.scss']
})
export class JQueryCourseComponent implements OnInit {
  /**
   * Interface defining the structure of a course
   */
  courses: Course[] = [
    {
      title: 'Introduction to jQuery',
      description: 'This course covers the basics of jQuery, including selectors, events, and animations.'
    },
    {
      title: 'Advanced jQuery Techniques',
      description: 'Learn advanced jQuery techniques, including AJAX, plugins, and performance optimization.'
    },
    {
      title: 'jQuery for Web Development',
      description: 'This course focuses on using jQuery in web development, including DOM manipulation and effects.'
    }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Component initialization logic if needed
  }

  /**
   * Navigate back to the homepage
   * Replaces the direct HTML link with Angular routing
   */
  navigateToHomepage(): void {
    this.router.navigate(['/home']);
  }
}

/**
 * Course interface
 * Defines the structure for course objects
 */
interface Course {
  title: string;
  description: string;
}