import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { UnitService } from '../unit.service';

import { Species, SpeAttribute } from '../object-types/species';

import { SPECIES, SPECATTRS } from '../mock-species';

@Injectable({
  providedIn: 'root'
})
export class SpeciesService {

    private speciesUrl: string;
    private species: Species[];

    constructor(
        private unit: UnitService
    ) {
        this.speciesUrl = '/species';
        this.species = null;
    }

    getSpecies(): Observable<Species[]> {
        this.unit.log("Spec Serv :: Species Began");
        if (this.species === null){
            this.unit.log("Spec Serv :: Species Initiated");
            this.species = SPECIES;
        }
        return of(this.species);
    }

    getSpeciesId(id: number | string) {
        this.unit.log("Spec Serv :: Species ID Began :: ID :: "+id);
        return this.getSpecies().pipe(
            map((species: Species[]) => species.find(spec => spec.id === +id))
        );
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
