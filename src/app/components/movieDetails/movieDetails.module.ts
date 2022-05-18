import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { MovieDetailsComponent } from "./movieDetails.component";

@NgModule({
	declarations: [
		MovieDetailsComponent
	],
	imports: [
		BrowserModule,
		RouterModule
	],
	exports: [
		MovieDetailsComponent
	]
})

export class MovieDetailsModule{}
