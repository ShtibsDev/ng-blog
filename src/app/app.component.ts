import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	styles: [``],
	template: `
		<header>
			<nav>
				<h1 class="pointer" routerLink="/">NgBlog</h1>
				<div class="links hide mobile">
					<a *ngFor="let link of linkList" [routerLink]="link.route">
						{{ link.text }}
					</a>
				</div>
				<button mat-icon-button class="show-only mobile" (click)="isNavExpanded = !isNavExpanded">
					<mat-icon>menu</mat-icon>
				</button>
			</nav>
			<app-expandable-section class="show-only mobile" [isExpanded]="isNavExpanded">
				<nav>
					<a *ngFor="let link of linkList" [routerLink]="link.route">
						{{ link.text }}
					</a>
				</nav>
			</app-expandable-section>
		</header>
		<main>
			<router-outlet></router-outlet>
		</main>
		<footer>Ofir Stiber Voronzov &copy;2022</footer>
	`,
})
export class AppComponent {
	readonly linkList = [
		{ route: './home', text: 'Home' },
		{ route: './about', text: 'About' },
	];

	isNavExpanded: boolean = false;
}
