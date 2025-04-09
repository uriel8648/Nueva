import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**
 * FooterComponent
 * 
 * This component replaces the footer section from the original AngularJS application.
 * It includes:
 * - Contact form with validation
 * - About section
 * - Store information
 * - Social media links
 * 
 * The contact form now uses Angular's Reactive Forms instead of the template-driven approach
 * in the original code. Form validation is handled through Angular's built-in validators.
 */
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  contactForm: FormGroup;
  submitted = false;
  submitSuccess = false;
  submitError = false;
  errorMessage = '';

  // Social media links that could be expanded to include URLs
  socialMedia = [
    { icon: 'fa-facebook-official', name: 'Facebook' },
    { icon: 'fa-instagram', name: 'Instagram' },
    { icon: 'fa-snapchat', name: 'Snapchat' },
    { icon: 'fa-pinterest-p', name: 'Pinterest' },
    { icon: 'fa-twitter', name: 'Twitter' },
    { icon: 'fa-linkedin', name: 'LinkedIn' }
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  /**
   * Initialize the reactive form with validators
   */
  private initForm(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required]]
    });
  }

  /**
   * Handle form submission
   * This replaces the original form action that pointed to "/action_page.php"
   */
  onSubmit(): void {
    this.submitted = true;
    
    // Stop if the form is invalid
    if (this.contactForm.invalid) {
      return;
    }

    // In a real application, this would be replaced with an actual API call
    // using Angular's HttpClient service
    this.submitContactForm(this.contactForm.value)
      .then(() => {
        this.submitSuccess = true;
        this.resetForm();
      })
      .catch(error => {
        this.submitError = true;
        this.errorMessage = error.message || 'An error occurred. Please try again.';
      });
  }

  /**
   * Mock API call to submit the form
   * In a real application, this would be moved to a service
   */
  private submitContactForm(formData: any): Promise<any> {
    // Simulate API call
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate successful submission
        resolve({ success: true });
        
        // To simulate an error, uncomment the following line:
        // reject(new Error('Failed to send message. Please try again.'));
      }, 1000);
    });
  }

  /**
   * Reset the form after successful submission
   */
  private resetForm(): void {
    this.contactForm.reset();
    this.submitted = false;
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      this.submitSuccess = false;
    }, 5000);
  }

  /**
   * Helper method to check if a field is invalid and has been touched or submitted
   */
  isFieldInvalid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return field ? (field.invalid && (field.touched || this.submitted)) : false;
  }
}