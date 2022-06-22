import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider, GithubAuthProvider, FacebookAuthProvider} from '@angular/fire/auth'
import { Router } from '@angular/router';
import { getAuth ,signInWithEmailAndPassword} from "firebase/auth";
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth : AngularFireAuth, private router : Router, private db: AngularFirestore) { }
  // login method
  login(email : string, password : string) {

    this.fireauth.signInWithEmailAndPassword(email,password).then( res => {
        localStorage.setItem("token",res.user?.uid as string);
        if(res.user?.emailVerified == true) {
        }
        else {
          alert('Account Not Activated, check your email')
        }

    }, err => {
        alert(err.message);
        this.router.navigate(['/login']);
    })
  }

  // register method
  register(email : string, password : string) {
    this.fireauth.createUserWithEmailAndPassword(email, password).then( res => {
      this.sendEmailForVarification(res.user);
      alert('Account registered, check your email for the authentication')
      return this.db.collection('Users').doc(res.user?.uid).set({
        authenticated:true
      });

    }).then(() => {
      alert('Registration Successful, check you email for the authentication link');
      this.router.navigate(['/login']);
    })
  }

  // sign out
  logout() {
    this.fireauth.signOut().then( () => {
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    }, err => {
      alert(err.message);
    })
  }

  // forgot password
  forgotPassword(email : string) {
      this.fireauth.sendPasswordResetEmail(email).then(() => {

      }, err => {
        alert('Something went wrong[Forgot Password error');
      })
  }

  // email varification
  sendEmailForVarification(user : any) {
    console.log(user);
    user.sendEmailVerification().then((res : any) => {
    }, (err : any) => {
      alert('Something went wrong[Verification error].')
    })
  }

  //sign in with google
  googleSignIn() {
    return this.fireauth.signInWithPopup(new GoogleAuthProvider).then(res => {

      this.db.collection('Users').doc(res.user?.uid).set({
        authenticated:true
      })
      localStorage.setItem('token',JSON.stringify(res.user?.email));

    }, err => {
      alert(err.message);
    })
  }

}
