import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterDetailsComponent } from './components/characterDetails/characterDetails.component';
import { MovieDetailsComponent } from './components/movieDetails/movieDetails.component';
import { MoviesComponent } from './components/movies/movies.component';
const routes: Routes = [
  {
    path: 'movies',
		component: MoviesComponent,
		data: {title: "Movies"}
  },
  {
		path: 'movies/:id',
		component: MovieDetailsComponent,
		data: {title: "Movie details"}
  },
  {
		path: 'people/:id',
    component: CharacterDetailsComponent,
		data: {title: "Character details"}
  },
  {
    path: '',
    redirectTo: '/movies',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
