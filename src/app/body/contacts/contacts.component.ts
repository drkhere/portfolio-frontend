import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { MailService } from '../../mail.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contacts',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {
contactForm: FormGroup;

  constructor(private fb: FormBuilder, private mailService: MailService) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  sendMail() {
    if (this.contactForm.valid) {
      console.log("SendMail Clicked")
      this.mailService.sendMail(this.contactForm.value)
        .subscribe({
          next: () => {
            alert('Message sent!');
            this.contactForm.reset();
          },
          error: (err) => {
            console.error(err);
            alert('Message sending failed');
          }
        });
    } else {
      alert('Please fill out all fields correctly.');
    }
  }
}
