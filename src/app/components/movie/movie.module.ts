import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MovieComponent } from "./movie.component";

@NgModule({
	declarations: [
		MovieComponent
	],
	imports: [
		CommonModule
	],
	exports: [
		MovieComponent
	]
})

export class MovieModule{}
