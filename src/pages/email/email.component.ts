import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import  * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { moveIn, fallIn } from '../../app/router.animations';
import { NavController } from 'ionic-angular';
import { AnchorsPage } from '../anchors/anchors';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  animations: [moveIn(), fallIn()],
  host: {'[@moveIn]': ''}
})
export class EmailComponent implements OnInit {

  state: string = '';
    error: any;

    constructor(public af: AngularFireAuth,private router: Router, public navCtrl: NavController) {
    this.af.authState.subscribe(auth => { 
      if(auth) {
        //this.router.navigateByUrl('/anchors');
      }
    });
  }


  onSubmit(formData) {
    if(formData.valid) {
      console.log(formData.value);
      this.af.auth.signInWithEmailAndPassword(
        formData.value.email,
        formData.value.password
      ).then(
        (success) => {
        console.log(success);
        this.navCtrl.push(AnchorsPage);
      }).catch(
        (err) => {
        console.log(err);
        this.error = err;
      })
    }
  }

  signUp() {
    this.navCtrl.push(SignupComponent);
  }

  backToLogin(){
    this.navCtrl.pop();
  }

  ngOnInit() {
  }

}
