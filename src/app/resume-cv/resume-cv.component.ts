import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume-cv',
  templateUrl: './resume-cv.component.html',
  styleUrls: ['./resume-cv.component.css']
})
export class ResumeCvComponent implements OnInit {

	name: string = "Michael Buchanan";
	address: string = "4802 Church Street, Taylor Mill, KY 41015";
	email: string = "michaelbuchanan23@gmail.com";
	phone: string = "859-835-3089";

	skills = [ "C#", "SQL Server", "Entity Framework", "MVC", "WebAPI"];

	experiences = [
		{ company: "American Legal", 	position: "Editor",		startEnd: "Nov. 2016 - May 2018" },
		{ company: "KMK", 				position: "Attorney",	startEnd: "July 2011 - March 2016" }
	];	

  constructor() { }

  ngOnInit() {
  }

}
