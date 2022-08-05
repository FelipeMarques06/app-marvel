import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = this.loginBuilder.group({
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });

  constructor(
    private loginBuilder: FormBuilder,
    private toast: HotToastService,
    private rotes: Router,
    private authService: AuthService,
    private closeDialog: MatDialog
  ) { }

  get email(){
    return this.loginForm.get('email')
  }

  get password(){
    return this.loginForm.get('password')
  }

  loginFirebase() {
    if(!this.loginForm.valid) {
      return;
    }

    const {email, password}:any = this.loginForm.value;
    this.authService.userLogin(email,password)
    .pipe(
      this.toast.observe({
        success: "Credentials validated! Welcome back Agent!",
        loading: "Redirecting...",
        error: "Something is wrong... Check your credentials please"
      })
    ).subscribe(()=>{
      this.rotes.navigate(["/"]);
      this.closeDialog.closeAll();
    })
  }

  ngOnInit(): void {
  }

}
