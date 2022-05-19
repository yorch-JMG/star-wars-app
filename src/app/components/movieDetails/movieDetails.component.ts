import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Film, MoviesService } from '../movies/services/movies.service';
import {
  Character,
  MovieDetailsService
} from './services/movieDetails.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'movie-details',
  templateUrl: './movieDetails.component.html',
  styleUrls: ['./movieDetails.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  movie$!: Observable<Film>;
  characters: Character[] = [];
  constructor(
    private readonly moviesSvc: MoviesService,
    private readonly movieDetailsSvc: MovieDetailsService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getMovie();
  }
  getMovie(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.movie$ = this.moviesSvc.getMovieDetails(id);
    this.movie$.subscribe(film => {
      for (const character of film.characters) {
        this.movieDetailsSvc
          .getCharacterName(character)
          .subscribe(character => {
            this.characters.unshift(character);
          });
      }
    });
  }
}
