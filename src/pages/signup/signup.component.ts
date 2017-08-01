import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import  * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { moveIn, fallIn } from '../../app/router.animations';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  animations: [moveIn(), fallIn()],
  host: {'[@moveIn]': ''}
})
export class SignupComponent implements OnInit {

  state: string = '';
  error: any;

  constructor(public af: AngularFireAuth,private router: Router,public navCtrl: NavController) {

  }

  onSubmit(formData) {
    if(formData.valid) {
      console.log(formData.value);
      this.af.auth.createUserWithEmailAndPassword(
        formData.value.email,
        formData.value.password
      ).then(
        (success) => {
        console.log(success);
        this.router.navigate(['/login'])
      }).catch(
        (err) => {
        console.log(err);
        this.error = err;
      })
    }
  }

  backToLogin(){
    this.navCtrl.pop();
  }

  ngOnInit() {
  }

}
