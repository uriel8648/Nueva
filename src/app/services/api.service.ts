import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from '../../environments/environment';

/**
 * ApiService
 * 
 * This service handles API communication with the backend server.
 * Migrated from the original connect.php file which established a database connection.
 * 
 * In the Angular architecture, we've replaced direct database connections with
 * HTTP requests to a backend API that handles database operations.
 */
@Injectable({
  providedIn: 'root' // Makes the service tree-shakable and available application-wide
})
export class ApiService {
  // Base API URL from environment configuration
  private apiUrl = environment.apiUrl;

  /**
   * Constructor with HttpClient dependency injection
   * Replaces the direct database connection from the original PHP file
   */
  constructor(private http: HttpClient) { }

  /**
   * Generic GET request method
   * @param endpoint The API endpoint to call
   * @param params Optional query parameters
   * @returns Observable of the response
   */
  get<T>(endpoint: string, params?: any): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}/${endpoint}`, { params })
      .pipe(
        retry(2), // Retry failed requests up to 2 times
        catchError(this.handleError)
      );
  }

  /**
   * Generic POST request method
   * @param endpoint The API endpoint to call
   * @param data The data to send in the request body
   * @returns Observable of the response
   */
  post<T>(endpoint: string, data: any): Observable<T> {
    return this.http.post<T>(`${this.apiUrl}/${endpoint}`, data)
      .pipe(
        catchError(this.handleError)
      );
  }

  /**
   * Generic PUT request method
   * @param endpoint The API endpoint to call
   * @param data The data to send in the request body
   * @returns Observable of the response
   */
  put<T>(endpoint: string, data: any): Observable<T> {
    return this.http.put<T>(`${this.apiUrl}/${endpoint}`, data)
      .pipe(
        catchError(this.handleError)
      );
  }

  /**
   * Generic DELETE request method
   * @param endpoint The API endpoint to call
   * @returns Observable of the response
   */
  delete<T>(endpoint: string): Observable<T> {
    return this.http.delete<T>(`${this.apiUrl}/${endpoint}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  /**
   * Error handler for HTTP requests
   * @param error The HTTP error response
   * @returns An observable that errors with the formatted error message
   */
  private handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}