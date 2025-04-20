import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  imports: [ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css',
})
export class ContactFormComponent {
  formSucess = false;

  contactForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[0-9]{10}$/),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(
        '^((?!\\.)[\\w\\-_.]*[^.])(@\\w+)(\\.\\w+(\\.\\w+)?[^.\\W])$',
      ),
    ]),
    message: new FormControl('', [Validators.required]),
  });

  hasFirstNameError(): boolean {
    const firstNameControl = this.contactForm.get('firstName');
    return firstNameControl?.touched && firstNameControl.errors?.['required'];
  }

  hasLastNameError(): boolean {
    const lastNameControl = this.contactForm.get('lastName');
    return lastNameControl?.touched && lastNameControl.errors?.['required'];
  }

  hasPhoneNumberError(): boolean {
    const control = this.contactForm.get('phoneNumber');
    return (
      control?.touched &&
      (control.errors?.['required'] || control.errors?.['pattern'])
    );
  }

  hasMailError(): boolean {
    const mailControl = this.contactForm.get('email');
    return (
      mailControl?.touched &&
      (mailControl.errors?.['required'] || mailControl.errors?.['pattern'])
    );
  }

  hasMessageError(): boolean {
    const messageControl = this.contactForm.get('message');
    return (
      messageControl?.touched &&
      (messageControl.errors?.['required'] ||
        messageControl.errors?.['pattern'])
    );
  }

  onSubmit() {
    let contactFormData = this.contactForm.value;
    console.log(contactFormData);
    this.formSucess = true;
  }
}
