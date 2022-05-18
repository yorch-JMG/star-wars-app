import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Film, MoviesService } from '../movies/services/movies.service';
import {
  Character,
  MovieDetailsService
} from './services/movieDetails.service';

@Component({
  selector: 'movie-details',
  templateUrl: './movieDetails.component.html',
  styleUrls: ['./movieDetails.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  movie!: Film;
  characters: Character[] = [];
  constructor(
    private readonly moviesSvc: MoviesService,
    private readonly movieDetailsSvc: MovieDetailsService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getMovie();
    this.getCharacterName();
  }
  getMovie(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.moviesSvc.getMovieDetails(id).subscribe(film => {
      this.movie = film;
			for(const character of film.characters){
				this.movieDetailsSvc
					.getCharacterName(character)
					.subscribe(character => {
						this.characters.unshift(character);
					});
			}
    });
  }
  getCharacterName(): void {}
}
