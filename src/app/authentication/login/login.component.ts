import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: [ './login.component.scss' ]
})
export class LoginComponent implements OnInit {
	constructor(private route: Router) {}

	goToUsers() {
		this.route.navigate([ 'content/home' ]);
		console.log('Vamos a tablas');
	}

	ngOnInit() {}
}
