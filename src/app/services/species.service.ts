import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { UnitService } from './unit.service';

import { Species, SpeAttribute } from '../object-types/species';

import { SPECIES, SPECATTRS } from '../mock-species';

@Injectable({
  providedIn: 'root'
})
export class SpeciesService {

    private speciesUrl: string = '/species';

    constructor(
        private unit: UnitService) { }

    getSpecies(): Observable<Species[]> {
        this.unit.log("Spec Serv :: Species Began");
        return of(SPECIES);
    }

    getSpecAttr(id: number): Observable<SpeAttribute[]> {
        this.unit.log("Spec Serv :: Spec Began");
        return of(SPECATTRS.filter(specAttr => specAttr.id === id))
    }

    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            this.unit.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
}
