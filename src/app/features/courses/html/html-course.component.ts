import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Course {
  title: string;
  description: string;
}

/**
 * HtmlCourseComponent
 * 
 * This component displays a list of HTML courses.
 * Migrated from the original JSP file to a proper Angular component.
 * 
 * Changes from AngularJS:
 * - Converted static HTML to component-based architecture
 * - Implemented proper Angular routing instead of direct HTML links
 * - Used TypeScript interfaces for type safety
 * - Moved styling to component-specific styles
 */
@Component({
  selector: 'app-html-course',
  templateUrl: './html-course.component.html',
  styleUrls: ['./html-course.component.scss']
})
export class HtmlCourseComponent implements OnInit {
  // Courses data that would typically come from a service in a real application
  courses: Course[] = [
    {
      title: 'Introduction to HTML',
      description: 'This course covers the basics of HTML, including elements, attributes, and structure.'
    },
    {
      title: 'Advanced HTML Techniques',
      description: 'Learn advanced HTML techniques, including forms, multimedia, and semantic HTML.'
    },
    {
      title: 'HTML for Web Development',
      description: 'This course focuses on using HTML in web development, including best practices and accessibility.'
    }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Component initialization logic would go here
    // In a real application, we might fetch the courses from an API
  }

  /**
   * Navigate back to the homepage
   * Replaces the direct HTML link with Angular routing
   */
  navigateToHomepage(): void {
    this.router.navigate(['/home']);
  }
}