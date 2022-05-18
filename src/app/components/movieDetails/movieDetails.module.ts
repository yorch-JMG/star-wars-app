import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { LoadingSpinnerModule } from "../loadingSpinner/loadingSpinner.module";
import { MovieDetailsComponent } from "./movieDetails.component";

@NgModule({
	declarations: [
		MovieDetailsComponent
	],
	imports: [
		BrowserModule,
		RouterModule,
		LoadingSpinnerModule
	],
	exports: [
		MovieDetailsComponent
	]
})

export class MovieDetailsModule{}
