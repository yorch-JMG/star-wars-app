import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { LoadingSpinnerComponent } from "./loadingSpinner.component";

@NgModule({
	declarations: [
		LoadingSpinnerComponent
	],
	exports: [
		LoadingSpinnerComponent
	],
	imports: [
		BrowserModule,
		RouterModule
	],
})

export class LoadingSpinnerModule{}
