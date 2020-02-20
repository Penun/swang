import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, Subject, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

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
    private speciesIdUrl: string;
    private specAttrUrl: string;

    private speciesSource: Subject<Species[]>;
    private obsSpecies: Observable<Species[]>;
    private speciesFetched: Species[];

    public getSpecies(): Observable<Species[]> { return this.obsSpecies; }

    constructor(
        private unit: UnitService,
        private http: HttpClient
    ) {
        this.speciesUrl = '/index.php/species/list';
        this.speciesIdUrl = '/index.php/species';
        this.specAttrUrl = '/index.php/species/attributes';
        this.speciesSource = new Subject<Species[]>();
        this.obsSpecies = this.speciesSource.asObservable();
        this.fetchSpecies();
    }

    public fetchSpecies(): void {
        this.unit.log("Spec Serv :: Species Began");
        this.http.get<Species[]>(this.speciesUrl).pipe(
            tap(_ => this.unit.log('Spec Serv :: Species Gotten')),
            catchError(this.handleError('getSpecies', [])))
            .subscribe(specs => {
                this.speciesFetched = specs;
                this.speciesSource.next(specs);
            }
        );
    }

    public speciesBroadcast(): void {
        this.unit.log("Species Serv Broadcast");
        this.speciesSource.next(this.speciesFetched);
    }

    getSpeciesId(id: number | string): Observable<Species> {
        this.unit.log("Spec Serv :: Species ID Began :: ID :: "+id);
        return this.http.post<Species>(this.speciesIdUrl, {id: id}, httpOptions).pipe(
            tap(_ => this.unit.log("Spec Serv :: Spec ID Gotten")),
            catchError(this.handleError<Species>('getSpecId'))
        );
    }

    getSpecAttr(id: number): Observable<SpeAttribute[]> {
        this.unit.log("Spec Serv :: Spec Attr Began");
        return this.http.post<SpeAttribute[]>(this.specAttrUrl, {id: id}, httpOptions).pipe(
            tap(_ => this.unit.log("Spec Serv :: Spec Attr Gotten")),
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
