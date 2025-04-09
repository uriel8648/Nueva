import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

/**
 * Auth Interceptor
 * 
 * This interceptor replaces the PHP database connection logic from the original connect.php file.
 * In Angular, we don't directly connect to databases from the frontend. Instead, we:
 * 1. Intercept HTTP requests to add authentication headers
 * 2. Handle authentication errors (like 401 Unauthorized)
 * 3. Redirect to login page when authentication fails
 * 
 * The original PHP file established a database connection that would be used
 * throughout the application. In Angular, we use HTTP interceptors to handle
 * authentication and API communication in a centralized way.
 */
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  
  constructor(private router: Router) {}

  /**
   * Intercept all HTTP requests to add auth token and handle errors
   */
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // Get the auth token from localStorage (if it exists)
    const token = localStorage.getItem('auth_token');
    
    // Clone the request and add the authorization header if token exists
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }
    
    // Pass the modified request to the next handler and catch any errors
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        // Handle authentication errors
        if (error.status === 401) {
          // Clear any stored credentials
          localStorage.removeItem('auth_token');
          localStorage.removeItem('user');
          
          // Redirect to login page
          this.router.navigate(['/login']);
        }
        
        // For database connection errors (similar to the original PHP file's purpose)
        if (error.status === 0 || error.status === 500) {
          console.error('API Connection Error:', error.message);
          // You could show a user-friendly message here about connection issues
        }
        
        // Re-throw the error for further handling
        return throwError(() => error);
      })
    );
  }
}