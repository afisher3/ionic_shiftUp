import { Component, OnInit, HostBinding } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import  * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { moveIn } from '../../app/router.animations';
import { NavController } from 'ionic-angular';
import { EmailComponent } from '../email/email.component';
import { AnchorsPage } from '../anchors/anchors';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  animations: [moveIn()],
  host: {'[@moveIn]': ''}
})
export class LoginComponent implements OnInit {

  error: any;
    constructor(public af: AngularFireAuth,private router: Router, public navCtrl: NavController) {

      this.af.authState.subscribe(auth => { 
      if(auth) {
        //this.navCtrl.push(AnchorsPage);
      }
    });
  }

  loginEmail() {
    this.navCtrl.push(EmailComponent);
  }

  loginGoogle() {
  	this.af.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
  	.then(
        (success) => {
        this.navCtrl.push(AnchorsPage);
      }).catch(
        (err) => {
        this.error = err;
      })
  }

  signUp() {
    this.navCtrl.push(SignupComponent);
  }

  ngOnInit() {
  }

}
