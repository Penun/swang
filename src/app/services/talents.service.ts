import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { UnitService } from './unit.service';

import { Talent } from '../object-types/talent';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})
export class TalentsService {

    private specTalentsUrl: string;

    constructor(
        private unit: UnitService,
        private http: HttpClient
    ) {
        this.specTalentsUrl = '/specializations/talents';
    }

    getSpecTalents(id: number): Observable<Talent[]> {
        this.unit.log("Talent Serv :: Talents Began");
        return this.http.post<Talent[]>(this.specTalentsUrl, {id: id}, httpOptions).pipe(
            tap(_ => this.unit.log('Talent Serv :: Talents Gotten')),
            catchError(this.handleError('getSpecTalents', []))
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
