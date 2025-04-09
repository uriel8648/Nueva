import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/**
 * JavaCourseComponent
 * 
 * This component displays a list of Java courses.
 * 
 * Migration notes:
 * - Converted from static JSP page to Angular component
 * - Moved inline styles to component-specific stylesheet
 * - Implemented proper Angular routing instead of direct HTML links
 * - Used OnInit lifecycle hook for initialization logic
 * - Structured course data as a TypeScript interface and array
 */

interface Course {
  title: string;
  description: string;
}

@Component({
  selector: 'app-java-course',
  templateUrl: './java-course.component.html',
  styleUrls: ['./java-course.component.scss']
})
export class JavaCourseComponent implements OnInit {
  /**
   * Interface defining the structure of a course
   */


  /**
   * Array of Java courses to display
   */
  courses: Course[] = [
    {
      title: 'Introduction to Java',
      description: 'This course covers the basics of Java, including syntax, data types, and control structures.'
    },
    {
      title: 'Advanced Java Programming',
      description: 'Learn advanced Java programming techniques, including object-oriented programming and design patterns.'
    },
    {
      title: 'Java for Web Development',
      description: 'This course focuses on using Java for web development, including servlets and JSP.'
    }
  ];

  /**
   * Constructor with dependency injection
   * @param router Angular Router service for navigation
   */
  constructor(private router: Router) { }

  /**
   * Lifecycle hook that is called after data-bound properties are initialized
   */
  ngOnInit(): void {
    // Any initialization logic would go here
    // This replaces any initialization that might have been in the JSP
  }

  /**
   * Navigate back to the homepage
   */
  navigateToHomepage(): void {
    this.router.navigate(['/home']);
  }
}