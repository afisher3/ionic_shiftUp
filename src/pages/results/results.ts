import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-results',
  templateUrl: 'results.html'
})
export class ResultsPage {
	results: any[];
	scores: any[];
	anchorOne: any;
	anchorTwo: any;
	type: string;
	data: any;
	options: any;
	tLeft: number;
	tRight: number;
	bLeft: number;
	bRight: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.results = navParams.get('results');

  	this.tLeft = (this.results[0].count + this.results[6].count + (this.results[1].count/2))/10;
  	this.tRight = (this.results[4].count + (this.results[2].count/2))/10;
  	this.bLeft = (this.results[3].count + (this.results[1].count/2))/10;
  	this.bRight = (this.results[7].count + (this.results[2].count/2))/10;

  	//chart data
  	this.type = 'pie';
	this.data = {
	  labels: [
	  	this.results[4].title + "\n" + this.results[2].title,
	  	this.results[7].title + '\n' + this.results[2].title,
	  	this.results[3].title + '\n' + this.results[1].title,
	  	this.results[6].title + '\n' + this.results[0].title + '\n' + this.results[1].title
	  ],
	  datasets: [
	    {
	      label: "Results",
	      data: [25,25,25,25],
	      backgroundColor: [
	      	'rgba(255, 255, 51,' + this.tRight +')',
	      	'rgba(255, 0, 0,' + this.bRight +')',
	      	'rgba(0, 255, 0,' + this.bLeft +')',
	      	'rgba(0, 0, 255,' + this.tLeft +')'
	      ]
	    }
	  ]
	};
	this.options = {
	  legend: false,
	  responsive: true,
	  maintainAspectRatio: false
	};

	// sort results by highest count
  	this.results.sort(function(a, b) {return b.count - a.count});
  	this.anchorOne = this.results[0];
  	this.anchorTwo = this.results[1];
  }
}
