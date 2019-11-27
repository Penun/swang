import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { UnitService } from './unit.service';

import { Career } from '../object-types/career';
import { Skill } from '../object-types/skill';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})
export class CareersService {

    private careerUrl: string;
    private carSpecUrl: string;

    constructor(
        private unit: UnitService,
        private http: HttpClient
    ) {
        this.careerUrl = '/careers_d';
        this.carSpecUrl = '/careers/specializations';
    }

    getCareers(): Observable<Career[]> {
        this.unit.log("Career Serv :: Careers Began");
        return this.http.get<Career[]>(this.careerUrl).pipe(
            tap(_ => this.unit.log('Career Serv :: Careers Gotten')),
            catchError(this.handleError('getCareers', []))
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
