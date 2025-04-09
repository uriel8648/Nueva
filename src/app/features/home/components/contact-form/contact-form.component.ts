import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  template: `
    <div>
      <h2>Contact Form</h2>
      <form>
        <div>
          <label>Name:</label>
          <input type="text">
        </div>
        <div>
          <label>Email:</label>
          <input type="email">
        </div>
        <div>
          <label>Message:</label>
          <textarea></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  `,
  styles: []
})
export class ContactFormComponent {}
