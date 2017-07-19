import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-anchors',
  templateUrl: 'anchors.html'
})
export class AnchorsPage {
	options: any[];
	indexOne: number;
	indexTwo: number;

  constructor(public navCtrl: NavController) {
  	this.indexOne = 0;
  	this.indexTwo = 1;
  	this.populateOptions();
  }

  decisionClicked(decision){
  	decision.count++;
  	if(!(this.indexTwo == 7)){
  		this.indexTwo++;
  	} else{
  		this.indexOne++;
  		this.indexTwo = this.indexOne + 1;
  	}
  	//alert(decision.count);
  }

  populateOptions(){
  	this.options = [
  		{
  			display: 'T',
	  		title: "Technical/Functional",
	  		description: "",
	  		count: 0
	  	},
	  	{
	  		display: 'M',
	  		title: "General managerial",
	  		description: "",
	  		count: 0
	  	},
	  	{
	  		display: 'A',
	  		title: "Autonomy/Independence",
	  		description: "",
	  		count: 0
	  	},
	  	{
	  		display: 'S',
	  		title: "Security/Stability",
	  		description: "",
	  		count: 0
	  	},
	  	{
	  		display: 'E',
	  		title: "Entrepreneurial creativity",
	  		description: "",
	  		count: 0
	  	},
	  	{
	  		display: 'D',
	  		title: "Service/Dedication to a cause",
	  		description: "",
	  		count: 0
	  	},
	  	{
	  		display: 'C',
	  		title: "Pure challenge",
	  		description: "",
	  		count: 0
	  	},
	  	{
	  		display: 'L',
	  		title: "Lifestyle",
	  		description: "",
	  		count: 0
	  	},
  	];
  }
}
