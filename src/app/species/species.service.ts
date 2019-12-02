import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { UnitService } from '../unit.service';

import { Species, SpeAttribute } from '../object-types/species';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})
export class SpeciesService {

    private speciesUrl: string;
    private specAttrUrl: string;

    private obsSpecies: Observable<Species[]>;

    constructor(
        private unit: UnitService,
        private http: HttpClient
    ) {
        this.speciesUrl = '/species/list';
        this.specAttrUrl = '/species/attributes';
        this.obsSpecies = null;
    }

    getSpecies(): Observable<Species[]> {
        this.unit.log("Spec Serv :: Species Began");
        if (this.obsSpecies === null){
            this.obsSpecies = this.http.get<Species[]>(this.speciesUrl).pipe(
                tap(_ => this.unit.log('Spec Serv :: Species Gotten')),
                catchError(this.handleError('getSpecies', []))
            );
        }
        return this.obsSpecies;
    }

    getSpeciesId(id: number | string) {
        this.unit.log("Spec Serv :: Species ID Began :: ID :: "+id);
        return this.getSpecies().pipe(
            map((species: Species[]) => species.find(spec => spec.id === +id))
        );
    }

    getSpecAttr(id: number): Observable<SpeAttribute[]> {
        this.unit.log("Spec Serv :: Spec Attr Began");
        return this.http.post<SpeAttribute[]>(this.specAttrUrl, {id: id}, httpOptions).pipe(
            tap(_ => this.unit.log("Spec  Attr Serv :: Spec Gotten")),
            catchError(this.handleError<SpeAttribute[]>('getSpecAttr'))
        );
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
