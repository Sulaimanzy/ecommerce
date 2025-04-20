import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login-form',
  imports: [ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent {
  formSucess = false;
  logInForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(
        '^((?!\\.)[\\w\\-_.]*[^.])(@\\w+)(\\.\\w+(\\.\\w+)?[^.\\W])$',
      ),
    ]),
    password: new FormControl('', [Validators.required]),
  });

  onSubmit() {
    const logInFormData = this.logInForm.value;
    console.log(logInFormData);
    this.formSucess = true;
  }
}
