import { Component, Input } from '@angular/core';
import { Film } from '../movies/services/movies.service';

@Component({
  selector: 'movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent {
	@Input() movie!: Film;
}
