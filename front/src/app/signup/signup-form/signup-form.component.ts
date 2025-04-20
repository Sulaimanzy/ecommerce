import { Component } from '@angular/core';
import {
  FormGroup,
  ReactiveFormsModule,
  FormControl,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-signup-form',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './signup-form.component.html',
  styleUrl: './signup-form.component.css',
})
export class SignupFormComponent {
  formSucess = false;
  signUpForm: FormGroup = new FormGroup(
    {
      email: new FormControl('', [
        Validators.pattern(
          '^((?!\\.)[\\w\\-_.]*[^.])(@\\w+)(\\.\\w+(\\.\\w+)?[^.\\W])$',
        ),
      ]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
    },
    this.verifyPassword,
  );

  ngOnInit() {
    emailjs.init('Lrc9Y-VdSwzyuRW7I');
  }

  verifyPassword(signUpForm: AbstractControl) {
    const firstPasswordValue = signUpForm.get('password')?.value;
    const secondPasswordValue = signUpForm.get('confirmPassword')?.value;

    if (firstPasswordValue === secondPasswordValue) {
      return null;
    } else {
      {
        return { passwordMismatch: true };
      }
    }
  }

  sendEmail() {
    const serviceID = 'service_byjywri';
    const templateID = 'template_nmgt5h2';

    const templateParams = {
      email: this.signUpForm.get('email')?.value,
      firstName: this.signUpForm.get('firstName')?.value,
      lastName: this.signUpForm.get('lastName')?.value,
      password: this.signUpForm.get('password')?.value,
    };

    emailjs.send(serviceID, templateID, templateParams).then(
      (response) => {
        console.log('Email sent successfully!', response);
      },
      (error) => {
        console.error('Error sending email: ', error);
      },
    );
  }

  onSubmit() {
    if (this.signUpForm.valid) {
      const signUpFormData = this.signUpForm.value;
      this.formSucess = true;
      this.sendEmail();
      console.log(signUpFormData);
    } else {
      console.log('Form is invalid');
    }
  }
}
