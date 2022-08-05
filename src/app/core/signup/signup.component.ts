import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthService } from 'src/app/services/auth/auth.service';

export function passwordsMatchValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if(password && confirmPassword && password !== confirmPassword){
      return {
        passwordsUnmatch: true
      }

    }
  return null;
  }
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  nameSignup!: FormGroup;
  emailSignup!: FormGroup;
  passwordSignup!: FormGroup;
  passwordConfirmationSignup!: FormGroup;

  isEditable = false;

  signupForm = this.loginBuilder.group({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required),
  }, { validators: passwordsMatchValidator() });

  constructor(
    private loginBuilder: FormBuilder,
    private authService: AuthService,
    private toast: HotToastService,
    private rotes: Router
  ) { }

  get name() {
    return this.signupForm.get('name')
  }

  get email() {
    return this.signupForm.get('email')
  }

  get password() {
    return this.signupForm.get('password')
  }

  get confirmPassword() {
    return this.signupForm.get('confirmPassword')
  }

  sendSignup() {
    if (!this.signupForm.valid) {
      return;
    }
    const { name, email, password }:any = this.signupForm.value;
    this.authService
      .userSignup(name, email, password)
      .pipe(
        this.toast.observe({
          success: 'Your user was created! Welcome to Marvel Database!',
          loading: 'Sending informations...',
          error: ({ message }) => `There was an error: ${message}`,
        })
      ).subscribe(() => {
        this.rotes.navigate(['/'])
      });
  }

  ngOnInit(): void {
  }

}
