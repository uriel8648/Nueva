import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/**
 * CSS Course Component
 * 
 * This component displays a list of CSS courses.
 * Migrated from JSP to Angular component.
 * 
 * Migration notes:
 * - Converted static HTML content to Angular component
 * - Moved inline styles to component CSS file (should be in css-course.component.scss)
 * - Replaced direct link with Angular Router navigation
 * - Structured course data as a TypeScript interface and array for better maintainability
 */

interface Course {
  title: string;
  description: string;
}

@Component({
  selector: 'app-css-course',
  template: `
    <h1>CSS Courses</h1>
    <div class="course" *ngFor="let course of courses">
      <h2>{{ course.title }}</h2>
      <p>{{ course.description }}</p>
    </div>
    <div style="margin-top: 20px;">
      <button class="w3-button w3-black" (click)="navigateToHomepage()">Back to Homepage</button>
    </div>
  `,
  styles: [`
    body {
      margin: 0;
      font-family: "Montserrat", sans-serif;
    }
    h1 {
      color: #333;
    }
    .course {
      background: white;
      padding: 15px;
      margin: 10px 0;
      border-radius: 5px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
      transition: transform 0.3s;
    }
    .course:hover {
      transform: scale(1.02);
    }
    .course h2 {
      margin: 0;
      color: #007BFF;
    }
    .course p {
      color: #555;
    }
  `]
})
export class CssCourseComponent implements OnInit {
  courses: Course[] = [
    {
      title: 'Introduction to CSS',
      description: 'This course covers the basics of CSS, including selectors, properties, and values.'
    },
    {
      title: 'Advanced CSS Techniques',
      description: 'Learn advanced CSS techniques, including flexbox, grid, and animations.'
    },
    {
      title: 'CSS for Web Development',
      description: 'This course focuses on using CSS in web development, including best practices and responsive design.'
    }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Component initialization logic can be added here if needed
  }

  navigateToHomepage(): void {
    this.router.navigate(['/']);
  }
}