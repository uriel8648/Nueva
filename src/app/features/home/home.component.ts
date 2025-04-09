import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

interface Course {
  name: string;
  image: string;
  route: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // Course data that will be displayed in the grid
  courses: Course[] = [
    { name: 'HTML', image: 'assets/images/html.jpeg', route: '/courses/html' },
    { name: 'CSS', image: 'assets/images/css.png', route: '/courses/css' },
    { name: 'JQUERY', image: 'assets/images/jquery.png', route: '/courses/jquery' },
    { name: 'SQL', image: 'assets/images/sql.jpeg', route: '/courses/sql' },
    { name: 'JAVA', image: 'assets/images/java.png', route: '/courses/java' },
    { name: 'JAVASCRIPT', image: 'assets/images/js.png', route: '/courses/javascript' }
  ];

  // Contact form model
  contactForm: FormGroup

  // Flag to show sidebar on mobile
  isSidebarOpen = false;

  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Any initialization logic can go here
  }

  /**
   * Navigate to the selected course
   * @param course The course to navigate to
   */
  navigateToCourse(course: Course): void {
    this.router.navigate([course.route]);
  }

  /**
   * Toggle sidebar visibility on mobile devices
   */
  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  /**
   * Close the sidebar
   */
  closeSidebar(): void {
    this.isSidebarOpen = false;
  }

  /**
   * Submit the contact form
   * In a real application, this would call a service to send the form data
   */
  submitContactForm(): void {
    // Accedemos al valor del formulario con .value
    console.log('Formulario enviado:', this.contactForm.value);

    // Resetear formulario después de enviar
    this.contactForm.reset();

    // Mostrar mensaje de éxito
    alert('Gracias por tu mensaje. ¡Nos pondremos en contacto pronto!');
  }

  onSubmit(): void {
    // Aquí puedes agregar lógica para enviar los datos del formulario
    console.log('Formulario enviado:', this.contactForm);
    
    // Después de enviar, resetea el formulario si lo deseas
    this.contactForm.reset();

    // Mostrar mensaje de éxito
    alert('Gracias por tu mensaje. ¡Nos pondremos en contacto pronto!');
  
  }
    /**
   * Método para manejar el inicio del curso
   * @param course El curso que se está iniciando
   */
    startCourse(course: Course): void {
      console.log('Iniciando curso:', course.name);
      // Aquí puedes agregar la lógica para redirigir al usuario al curso o hacer cualquier otra acción.
    }

  /**
   * Scroll to a specific section of the page
   * @param elementId The ID of the element to scroll to
   */
  scrollToSection(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}