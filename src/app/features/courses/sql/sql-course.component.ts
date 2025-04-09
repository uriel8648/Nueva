import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/**
 * SqlCourseComponent
 * 
 * This component displays a list of SQL courses.
 * Migrated from the original SQL.jsp file to a proper Angular component.
 * 
 * Migration notes:
 * - Converted static HTML content to component-based structure
 * - Moved inline styles to component-specific styles
 * - Implemented proper routing with Angular Router instead of direct HTML links
 * - Added TypeScript interfaces for course data
 * - Implemented OnInit lifecycle hook to initialize course data
 */
interface SqlCourse {
  title: string;
  description: string;
}

@Component({
  selector: 'app-sql-course',
  templateUrl: './sql-course.component.html',
  styleUrls: ['./sql-course.component.scss']
})
export class SqlCourseComponent implements OnInit {
  // Course data array with proper typing
  courses: SqlCourse[] = [];

  constructor(private router: Router) { }

  /**
   * Initialize component and load course data
   */
  ngOnInit(): void {
    // Initialize courses data
    // In a real application, this would likely come from a service
    this.loadCourses();
  }

  /**
   * Load SQL courses
   * This simulates loading data that was previously hardcoded in the JSP
   */
  private loadCourses(): void {
    this.courses = [
      {
        title: 'Introduction to SQL',
        description: 'This course covers the basics of SQL, including queries, joins, and data manipulation.'
      },
      {
        title: 'Advanced SQL Techniques',
        description: 'Learn advanced SQL techniques, including stored procedures, triggers, and optimization.'
      },
      {
        title: 'SQL for Data Analysis',
        description: 'This course focuses on using SQL for data analysis and reporting in business intelligence.'
      }
    ];
  }

  /**
   * Navigate back to homepage
   * Replaces the direct HTML link with Angular routing
   */
  navigateToHomepage(): void {
    this.router.navigate(['/home']);
  }
}