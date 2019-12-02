import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { UnitService } from '../unit.service';

import { Character } from '../object-types/character';

import { CHARACTERS } from '../mock-characters';

@Injectable({
    providedIn: 'root'
})
export class CharactersService {

    constructor(
        private unit: UnitService
    ) { }

    getCharacters(): Observable<Character[]> {
        this.unit.log("Character Serv :: Characters Began");
        return of(CHARACTERS);
    }
}
