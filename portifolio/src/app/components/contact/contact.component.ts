import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  message: string = '';

  onSubmit(formData: any) {
    if (
      formData.name === '' ||
      formData.email === '' ||
      formData.message === ''
    ) {
      alert('Name, email, and message fields are required!');
      return;
    }
    alert('Message sent successfully!');
  }
}
