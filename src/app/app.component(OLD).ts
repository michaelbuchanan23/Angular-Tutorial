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
	title: string = 'Mike';
	sometext: string ='my text';

	displayName: boolean = false;

	names = [
		{ name: "Michael", 	tag: 4,		abool: true },
		{ name: "Dan", 		tag: 3,		abool: false },
		{ name: "Anna", 	tag: 1,		abool: true },
		{ name: "Marcus", 	tag: 4,		abool: false },
		{ name: "Foster", 	tag: 4,		abool: true },
		{ name: "Jonathan",	tag: 4,		abool: false },
		{ name: "Larry", 	tag: 3,		abool: true }
	];


aMessage: string = "Starting message";

//this is a method called onclick --not to be confused with the javascript onclick event
onclick(): void {
	this.sometext = "This is some text";
}

//toggles displayName value
toggle(): void {
	this.displayName = !this.displayName;
}
}