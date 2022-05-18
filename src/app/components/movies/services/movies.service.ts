import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, pluck } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

export interface Film {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  species: string[];
  starships: string[];
  vehicles: string[];
  characters: string[];
  planets: string[];
  url: string;
  created: string;
  edited: string;
}

@Injectable({ providedIn: 'root' })
export class MoviesService {
  constructor(private readonly http: HttpClient) {}

	getAllMovies(optionSelection: string, orderSelection: string): Observable<Film[]> {
    return this.http.get<any>(environment.api + 'films').pipe(
      pluck('results'),
      map(results =>
					results.sort().sort((a: Film, b: Film) => {
						if(optionSelection === '0' && orderSelection === '0'){
							return a.episode_id - b.episode_id;
						}	
						else if(optionSelection === '0' && orderSelection === '1'){
							return b.episode_id - a.episode_id;
						}
						else if(optionSelection === '1' && orderSelection === '0'){
							return a.release_date.localeCompare(b.release_date) || b.episode_id - a.episode_id;
						}
						else {
							return b.release_date.localeCompare(a.release_date) || b.episode_id - a.episode_id;
						}
					})
      )
    );
  }
}
