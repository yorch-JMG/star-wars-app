import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieModule } from './components/movie/movie.module';
import { MovieDetailsModule } from './components/movieDetails/movieDetails.module';
import { LoadingSpinnerModule } from './components/loadingSpinner/loadingSpinner.module'; 

@NgModule({
  declarations: [
		AppComponent,
		HeaderComponent,
		MoviesComponent
  ],
  imports: [
    BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		FormsModule,
		MovieModule,
		MovieDetailsModule,
		LoadingSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
