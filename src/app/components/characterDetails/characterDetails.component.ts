import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Character, Homeworld } from './services/characterDetails.service';
import { Observable } from 'rxjs';
import { CharacterDetailsService } from './services/characterDetails.service';
import { Film } from '../movies/services/movies.service';

@Component({
  selector: 'character-details',
  templateUrl: './characterDetails.component.html',
  styleUrls: ['./characterDetails.component.scss']
})
export class CharacterDetailsComponent implements OnInit {
  character$!: Observable<Character>;
  homeworld$!: Observable<Homeworld>;
  relatedFilms!: Film[];
  constructor(
    private readonly characterDetailsSvc: CharacterDetailsService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getCharacter();
		this.getHomeworld()
  }
  getCharacter(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.character$ = this.characterDetailsSvc.getCharacter(id);
    this.character$.subscribe(character => {
      for (const film of character.films) {
        this.characterDetailsSvc.getRelatedFilm(film).subscribe(relatedFilm => {
          this.relatedFilms.unshift(relatedFilm);
        });
      }
    });
  }
	getHomeworld(): void {
		this.character$.subscribe(character => {
			this.homeworld$ = this.characterDetailsSvc.getHomeworld(character.homeworld)
		})
	}
}
