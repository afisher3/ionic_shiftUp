import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AnchorsPage } from '../anchors/anchors';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  	
  }

  takeQuiz(){
  	this.navCtrl.push(AnchorsPage);
  }

}
