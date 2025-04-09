import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/**
 * JavaScriptCourseComponent
 * 
 * This component displays a list of JavaScript courses.
 * Migrated from a JSP page to an Angular component.
 * 
 * Migration notes:
 * - Converted static HTML content to Angular component
 * - Moved inline styles to separate CSS file
 * - Replaced direct link with Angular Router navigation
 * - Added proper TypeScript interfaces for course data
 */
interface Course {
  title: string;
  description: string;
}

@Component({
  selector: 'app-javascript-course',
  templateUrl: './javascript-course.component.html',
  styleUrls: ['./javascript-course.component.scss']
})
export class JavaScriptCourseComponent implements OnInit {
  // Course data that was previously hardcoded in the HTML
  courses: Course[] = [
    {
      title: 'Introduction to JavaScript',
      description: 'This course covers the basics of JavaScript, including syntax, variables, and functions.'
    },
    {
      title: 'Advanced JavaScript Techniques',
      description: 'Learn advanced JavaScript techniques, including closures, promises, and async programming.'
    },
    {
      title: 'JavaScript for Web Development',
      description: 'This course focuses on using JavaScript in web development, including DOM manipulation and event handling.'
    }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Component initialization logic can be added here if needed
  }

  /**
   * Navigate back to the homepage
   * Replaces the direct HTML link with Angular routing
   */
  navigateToHomepage(): void {
    this.router.navigate(['/home']);
  }
}