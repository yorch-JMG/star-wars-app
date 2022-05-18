import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { LoadingSpinnerModule } from "../loadingSpinner/loadingSpinner.module";
import { MoviesComponent } from "./movies.component";

@NgModule({
	declarations: [
		MoviesComponent
	],
	imports: [
		CommonModule,
		RouterModule,
		LoadingSpinnerModule
	],
	exports: [
		MoviesComponent
	]
})

export class MovieModule{}
