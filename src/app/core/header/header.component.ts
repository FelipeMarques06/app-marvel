import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user$=this.authService.userLogged$;

  constructor(
    private loginDialog: MatDialog,
    private rotes: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  openLogin(errorMsg: string){
    this.loginDialog.open(LoginComponent,{
      data: errorMsg
    })
  }

  logout(){
    this.authService.logout().subscribe(()=>{
      this.rotes.navigate(['/'])
    })
  }

}
