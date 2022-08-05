import { Injectable } from '@angular/core';
import { Auth, authState } from '@angular/fire/auth';
import { createUserWithEmailAndPassword, getAuth, sendPasswordResetEmail, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { from, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userLogged$ = authState(this.userFb);
  auth = getAuth();

  constructor(
    private userFb: Auth
  ) { }

  userLogin(userEmail: string, userPassword: string):any{
    return from(signInWithEmailAndPassword(this.userFb, userEmail, userPassword));
  }

  logout(){
    return from(this.userFb.signOut());
  }

  userSignup(name: string, email: string, password: string):any{
    return from(createUserWithEmailAndPassword(this.userFb, email, password)).pipe(
      switchMap(({user}) => updateProfile(user, {displayName: name}))
    )
  }

  recoverPassword(email: string){
    return from(sendPasswordResetEmail(this.userFb, email))
  }
}
