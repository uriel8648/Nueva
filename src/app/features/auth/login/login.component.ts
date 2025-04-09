import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

/**import { AuthService } from '../../../core/services/auth.service';
 * LoginComponent handles user authentication functionality
 * 
 * Migration notes:
 * - Converted inline HTML to separate template file
 * - Replaced direct DOM manipulation with Angular's declarative approach
 * - Added reactive forms for validation and form handling
 * - Implemented proper Angular routing instead of direct href links
 * - Added proper TypeScript typing for all properties and methods
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // Form groups for login and signup
  isSignupModalOpen: boolean = false; 
  isLoginModalOpen: boolean = false; //
  loginForm: FormGroup;
  signupForm: FormGroup;
  
  // Modal visibility states
  showLoginModal = false;
  showSignupModal = false;
  
  // Authentication error message
  errorMessage: string = '';
  
  // Remember me checkbox state
  rememberMe: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    // Initialize forms with validators
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      password: ['', Validators.required],
      dob: ['', Validators.required],
      gender: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Component initialization logic
  }

  /**
   * Opens the login modal dialog
   */
  openLoginModal(): void {
    this.isLoginModalOpen = true;
  }

  /**
   * Opens the signup modal dialog
   */
  openSignupModal(): void {
    this.isSignupModalOpen = true;
  }

  /**
   * Closes the login modal dialog
   */
  closeLoginModal(): void {
    this.isLoginModalOpen = false;
    this.loginForm.reset();
    this.errorMessage = '';
  }

  /**
   * Closes the signup modal dialog
   */
  closeSignupModal(): void {
    this.isSignupModalOpen = false;
    this.signupForm.reset();
  }

  /**
   * Handles the login form submission
   * Authenticates the user and navigates to homepage on success
   */
  onLogin(): void {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      
      this.authService.login(username, password)
        .subscribe({
          next: (response) => {
            // Navigate to homepage on successful login
            this.router.navigate(['/home']);
            if (this.rememberMe) {
              // Store remember me preference
              localStorage.setItem('rememberMe', 'true');
            }
          },
          error: (error) => {
            this.errorMessage = 'Invalid username or password';
            console.error('Login error:', error);
          }
        });
    } else {
      // Mark all fields as touched to trigger validation messages
      this.loginForm.markAllAsTouched();
    }
  }

  /**
   * Handles the signup form submission
   * Registers a new user and navigates to login on success
   */
  onSignup(): void {
    if (this.signupForm.valid) {
      const userData = this.signupForm.value;
      
      this.authService.register(userData)
        .subscribe({
          next: (response) => {
            // Close signup modal and open login modal
            this.closeSignupModal();
            this.openLoginModal();
          },
          error: (error) => {
            console.error('Registration error:', error);
            // Handle registration errors
          }
        });
    } else {
      // Mark all fields as touched to trigger validation messages
      this.signupForm.markAllAsTouched();
    }
  }

  /**
   * Navigates to the password recovery page
   */
  forgotPassword(event: Event): void {
    this.closeLoginModal();
    event.preventDefault();
    this.router.navigate(['/auth/recover-password']);
  }

  /**
   * Toggles the remember me checkbox state
   */
  toggleRememberMe(): void {
    this.rememberMe = !this.rememberMe;
  }
}