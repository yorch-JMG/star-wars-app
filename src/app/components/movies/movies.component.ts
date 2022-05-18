import { Component } from '@angular/core';
import { Observable} from 'rxjs';
import { Film, MoviesService } from './services/movies.service';


@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent {
	optionSelected : string = '0';
	releaseOptionSelected : string = '0';

	movies$ !: Observable<Film[]>;
	onOptionsSelected(optionSelection: string, orderSelection: string){
		this.movies$ = this.moviesSvc.getAllMovies(optionSelection,orderSelection)
	}
  constructor(private readonly moviesSvc: MoviesService) {
		this.movies$ = this.moviesSvc.getAllMovies(this.optionSelected, this.releaseOptionSelected);
  }
}
