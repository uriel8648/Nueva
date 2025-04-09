import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';


/**
 * RegisterComponent
 * 
 * This component handles user registration functionality.
 * Migrated from the original reg.jsp file to a proper Angular component.
 * 
 * Note: The original file contained only HTML structure and some JavaScript functions
 * for sidebar toggling. This component has been expanded to include proper
 * registration form handling with reactive forms.
 */
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  isSubmitting = false;
  errorMessage: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    // Initialize the form with validators
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, { validator: this.passwordMatchValidator });
  }

  ngOnInit(): void {
    // Component initialization logic
  }

  /**
   * Custom validator to ensure password and confirm password match
   */
  passwordMatchValidator(group: FormGroup): { [key: string]: any } | null {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    
    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  /**
   * Handle form submission
   */
  onSubmit(): void {
    if (this.registerForm.invalid) {
      return;
    }

    this.isSubmitting = true;
    this.errorMessage = null;

    const registrationData = {
      username: this.registerForm.value.username,
  email: this.registerForm.value.email,
  password: this.registerForm.value.password
    };

    this.authService.register(registrationData)
    .subscribe(
    response => {
      this.isSubmitting = false;
      this.router.navigate(['/login']);
    },
    error => {
      this.isSubmitting = false;
      this.errorMessage = error.message || 'Registration failed. Please try again.';
    }
  );
}

  /**
   * Toggle sidebar visibility
   * Migrated from the original JavaScript function
   */
  openSidebar(): void {
    // Using document directly is not Angular's best practice, but kept for migration fidelity
    // In a real application, this should be refactored to use Angular's renderer or a dedicated service
    document.getElementById("mySidebar")!.style.display = "block";
    document.getElementById("myOverlay")!.style.display = "block";
  }

  /**
   * Close sidebar
   * Migrated from the original JavaScript function
   */
  closeSidebar(): void {
    document.getElementById("mySidebar")!.style.display = "none";
    document.getElementById("myOverlay")!.style.display = "none";
  }

  /**
   * Toggle accordion functionality
   * Migrated from the original JavaScript function
   */
  toggleAccordion(): void {
    const demoAcc = document.getElementById("demoAcc");
    if (demoAcc) {
      if (demoAcc.className.indexOf("show") == -1) {
        demoAcc.className += " show";
      } else {
        demoAcc.className = demoAcc.className.replace(" show", "");
      }
    }
  }
}