import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailsComponent } from './components/movieDetails/movieDetails.component';
import { MoviesComponent } from './components/movies/movies.component';
const routes: Routes = [
  {
    path: 'movies',
    component: MoviesComponent
  },
  {
		path: 'movies/:id',
    component: MovieDetailsComponent
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
