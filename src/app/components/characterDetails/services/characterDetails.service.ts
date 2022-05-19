import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Film } from '../../movies/services/movies.service';

export interface Character {
  name: string;
  birth_year: string;
  eye_color: string;
  gender: string;
  hair_color: string;
  height: string;
  mass: string;
  skin_color: string;
  homeworld: string;
  films: string[];
  species: string[];
  starships: string[];
  vehicles: string[];
  url: string;
  created: string;
  edited: string;
}

export interface Homeworld {
  name: string;
  diameter: string;
  rotation_period: string;
  orbital_period: string;
  gravity: string;
  population: string;
  climate: string;
  terrain: string;
  surface_water: string;
  residents: string[];
  films: string[];
  url: string;
  created: string;
  edited: string;
}

@Injectable({ providedIn: 'root' })
export class CharacterDetailsService {
  constructor(private readonly http: HttpClient) {}

  getCharacter(id: number): Observable<Character> {
    return this.http.get<Character>(environment.api + '/people/' + id);
  }
  getRelatedFilm(url: string): Observable<Film> {
    return this.http.get<Film>(url);
  }
  getHomeworld(url: string): Observable<Homeworld> {
    return this.http.get<Homeworld>(url);
  }
}
