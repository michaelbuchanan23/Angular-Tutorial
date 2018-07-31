import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

	menudata = [
	{ href: "/home"		, 	display: "Home" 	},
	{ href: "/about"	, 	display: "About" 	},
	{ href: "/contact"	, 	display: "Contact" 	},
	{ href: "/help"		, 	display: "Help" 	}
	];

	tableclass: string;

	change(): void {
		this.tableclass = "table table-sm";
	}

 	constructor() { }

  	ngOnInit() { }

}