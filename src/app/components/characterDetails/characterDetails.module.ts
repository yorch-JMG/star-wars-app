import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { LoadingSpinnerModule } from "../loadingSpinner/loadingSpinner.module";
import { CharacterDetailsComponent } from "./characterDetails.component";

@NgModule({
	declarations: [
		CharacterDetailsComponent
	],
	imports: [
		CommonModule,
		RouterModule,
		LoadingSpinnerModule
	],
	exports: [
		CharacterDetailsComponent
	]
})

export class CharacterDetailsModule{}
