import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MoviesComponent } from "./movies.component";

@NgModule({
	declarations: [
		MoviesComponent
	],
	imports: [
		CommonModule,
		RouterModule
	],
	exports: [
		MoviesComponent
	]
})

export class MovieModule{}
