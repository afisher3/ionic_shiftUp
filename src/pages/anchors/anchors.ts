import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ResultsPage } from '../results/results';
import  * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-anchors',
  templateUrl: 'anchors.html'
})
export class AnchorsPage {
	options: any[];
	indexOne: number;
	indexTwo: number;
	doneTest: boolean;
	testProgress: number;
	userId: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,public af: AngularFireAuth) {
  	this.doneTest = false;
  	this.indexOne = 0;
  	this.indexTwo = 1;
  	this.populateOptions();
  	this.testProgress = 0;
  	this.af.authState.subscribe(auth => { 
      if(auth) {
      	this.userId = auth.uid;
        //this.navCtrl.push(AnchorsPage);
      }
  	});
  	//this.userId = af.//navParams.get('userId');
  }

  decisionClicked(decision){
  	if(!this.doneTest){
	  	decision.count++;
	  	this.testProgress++;
	  	if(!(this.indexTwo == 7)){
	  		this.indexTwo++;
	  	} else{
	  		if(this.indexOne == 6){
	  			this.doneTest = true;
	  			this.storeResults();
	  			this.navCtrl.push(ResultsPage, { 
	  				results: this.options 
	  			});
	  			return;
	  		}
	  		this.indexOne++;
	  		this.indexTwo = this.indexOne + 1;
	  	}
  	}
  }

  storeResults(){
  	firebase.database().ref('users/' + this.userId).set({
  		results: this.options
  	});
  }

  populateOptions(){
  	this.options = [
  		{
  			display: 'T',
	  		title: "Technical/Functional",
	  		description: "You are most happy when your work permits you to be challenged in areas you are most proficient. You would not give up the opportunity to apply your skills in that area.",
	  		count: 0
	  	},
	  	{
	  		display: 'M',
	  		title: "General managerial",
	  		description: "You want to be responsible and accountable for total results. You would not give up the opportunity to climb to a level high enough in an organization to enable you to integrate the efforts of others.",
	  		count: 0
	  	},
	  	{
	  		display: 'A',
	  		title: "Autonomy/Independence",
	  		description: "You cannot stand organizational rules and restrictions to any degree. You seek occupations in which you will have the freedom to seek. You would not give up the opportunity to define your own work in your own way.",
	  		count: 0
	  	},
	  	{
	  		display: 'S',
	  		title: "Security/Stability",
	  		description: "You are less concerned with the content of your work and the rank you achieve in the organization. You would not give up employment security or tenure in a job or organization.",
	  		count: 0
	  	},
	  	{
	  		display: 'E',
	  		title: "Entrepreneurial creativity",
	  		description: "You want to prove to the world that you can create an enterprise that is the result of your own effort. You would not give up the opportunity to create an organization.",
	  		count: 0
	  	},
	  	{
	  		display: 'D',
	  		title: "Service/Dedication to a cause",
	  		description: "You pursue opportunities even if it means changing organizations. You would not give up an opportunity to pursue work that achieves something of value, such as making the world a better place to live.",
	  		count: 0
	  	},
	  	{
	  		display: 'C',
	  		title: "Pure challenge",
	  		description: "For you, the only meaningful reason for pursuing a job or career is that it permits you to succeed in the face of the impossible. You would not give up the opportunity to work on solutions to seemingly unsolvable problems.",
	  		count: 0
	  	},
	  	{
	  		display: 'L',
	  		title: "Lifestyle",
	  		description: "You may have to sacrifice some aspects of the career, and you define success in terms broader than just career success. You would not give up a situation that permits you to balance and integrate your personal needs.",
	  		count: 0
	  	},
  	];
  }
}
