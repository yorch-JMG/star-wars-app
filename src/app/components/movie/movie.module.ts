import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MovieComponent } from "./movie.component";

@NgModule({
	declarations: [
		MovieComponent
	],
	imports: [
		CommonModule,
		RouterModule
	],
	exports: [
		MovieComponent
	]
})

export class MovieModule{}
