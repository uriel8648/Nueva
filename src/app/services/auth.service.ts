import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

/**
 * Interface for user authentication data
 */
export interface User {
  id?: number;
  username: string;
  email?: string;
  password?: string;
  token?: string;
  gender?: string;
  dob?: string;
}

/**
 * Interface for login response
 */
export interface LoginResponse {
  success: boolean;
  user?: User;
  token?: string;
  message?: string;
}

/**
 * Authentication service responsible for user login, registration, and session management
 * Migrated from AngularJS to Angular 12
 */
@Injectable({
  providedIn: 'root' // Makes the service tree-shakable and available application-wide
})


export class AuthService {
  // Store the authenticated user
  private currentUser: User | null = null;
  
  // Store the authentication token
  private authToken: string | null = null;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    // Check if user is already logged in from localStorage
    this.loadUserFromStorage();
  }
  

  /**
   * Loads user data from localStorage if available
   * Migrated from AngularJS $window service
   */
  private loadUserFromStorage(): void {
    const storedUser = localStorage.getItem('currentUser');
    const storedToken = localStorage.getItem('authToken');
    
    if (storedUser && storedToken) {
      this.currentUser = JSON.parse(storedUser);
      this.authToken = storedToken;
    }
  }

  /**
   * Authenticates user with provided credentials
   * Converted from AngularJS $http promise to Angular HttpClient with RxJS Observable
   * 
   * @param username User's username
   * @param password User's password
   * @returns Observable with login response
   */
  login(username: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>('/api/login', { username, password })
      .pipe(
        tap(response => {
          if (response.success && response.user && response.token) {
            this.setSession(response.user, response.token);
          }
        }),
        catchError(error => {
          console.error('Login failed:', error);
          return throwError(() => new Error(error.message || 'Login failed. Please try again.'));
        })
      );
  }

  /**
   * Registers a new user
   * Converted from AngularJS form submission to Angular HttpClient
   * 
   * @param user User registration data
   * @returns Observable with registration response
   */
  register(user: User): Observable<LoginResponse> {
    return this.http.post<LoginResponse>('/api/signup', user)
      .pipe(
        tap(response => {
          if (response.success && response.user && response.token) {
            this.setSession(response.user, response.token);
          }
        }),
        catchError(error => {
          console.error('Registration failed:', error);
          return throwError(() => new Error(error.message || 'Registration failed. Please try again.'));
        })
      );
  }

  /**
   * Logs out the current user
   * Clears session data and redirects to login page
   */
  logout(): void {
    // Clear user data from memory
    this.currentUser = null;
    this.authToken = null;
    
    // Clear localStorage
    localStorage.removeItem('currentUser');
    localStorage.removeItem('authToken');
    
    // Redirect to login page
    this.router.navigate(['/login']);
  }

  /**
   * Stores user session data
   * 
   * @param user User data
   * @param token Authentication token
   */
  private setSession(user: User, token: string): void {
    // Store in memory
    this.currentUser = user;
    this.authToken = token;
    
    // Store in localStorage for persistence
    localStorage.setItem('currentUser', JSON.stringify(user));
    localStorage.setItem('authToken', token);
  }

  /**
   * Checks if user is currently authenticated
   * 
   * @returns Boolean indicating authentication status
   */
  isAuthenticated(): boolean {
    return !!this.currentUser && !!this.authToken;
  }

  /**
   * Gets the current authenticated user
   * 
   * @returns Current user or null if not authenticated
   */
  getCurrentUser(): User | null {
    return this.currentUser;
  }

  /**
   * Gets the authentication token
   * 
   * @returns Authentication token or null if not authenticated
   */
  getAuthToken(): string | null {
    return this.authToken;
  }

  /**
   * Checks if the password reset token is valid
   * 
   * @param token Password reset token
   * @returns Observable with token validation result
   */
  validateResetToken(token: string): Observable<boolean> {
    return this.http.get<{valid: boolean}>(`/api/validate-reset-token/${token}`)
      .pipe(
        map(response => response.valid),
        catchError(error => {
          console.error('Token validation failed:', error);
          return throwError(() => new Error('Invalid or expired token'));
        })
      );
  }

  /**
   * Initiates password reset process
   * 
   * @param email User's email address
   * @returns Observable with reset request result
   */
  requestPasswordReset(email: string): Observable<{success: boolean, message: string}> {
    return this.http.post<{success: boolean, message: string}>('/api/forgot-password', { email })
      .pipe(
        catchError(error => {
          console.error('Password reset request failed:', error);
          return throwError(() => new Error(error.message || 'Password reset request failed'));
        })
      );
  }

  /**
   * Resets user password with token
   * 
   * @param token Reset token
   * @param newPassword New password
   * @returns Observable with password reset result
   */
  resetPassword(token: string, newPassword: string): Observable<{success: boolean, message: string}> {
    return this.http.post<{success: boolean, message: string}>('/api/reset-password', { 
      token, 
      password: newPassword 
    }).pipe(
      catchError(error => {
        console.error('Password reset failed:', error);
        return throwError(() => new Error(error.message || 'Password reset failed'));
      })
    );
  }
}