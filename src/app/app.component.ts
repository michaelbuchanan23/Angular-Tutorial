import { Component } from '@angular/core';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
//  template: `
//		<div>
//  		<h1>AppComponent</h1>
//		</div>
//	`,
styleUrls: ['./app.component.css']
})

export class AppComponent {
	title: string = 'Angular Tutorial';
	sometext: string ='my text';

	displayName: boolean = false;

	names = [];

	name: string;
	nbr: number;
	amount: number;

	aMessage: string = "Starting message";

	//add function to add name and number
	add(): void {
		let obj = {
			name: this.name,
			nbr: this.nbr,
			amt: this.amount
		};
		this.names.push(obj);
		console.log(this.names);
		this.name="";
		this.nbr=null;
		this.amount=null;
	}

	//this is a method called onclick --not to be confused with the javascript onclick event
	onclick(): void {
		this.sometext = "This is some text";
	}

	//toggles displayName value
	toggle(): void {
		this.displayName = !this.displayName;
	}
}