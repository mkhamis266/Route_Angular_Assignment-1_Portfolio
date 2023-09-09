import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  title: string = 'Contact';
  color: string = '#2c3e50';

  onSubmit(event: Event) {
    event.preventDefault();
  }
}
