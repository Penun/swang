import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { UnitService } from '../unit.service';

import { Specialization } from '../object-types/specialization';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class SpecializationsService {

    private carSpecUrl: string;

    constructor(
        private unit: UnitService,
        private http: HttpClient
    ) {
        this.carSpecUrl = '/careers/specializations';
    }

    getCareerSpecs(id: number): Observable<Specialization[]> {
        this.unit.log("special Serv :: Specializations Began");
        return this.http.post<Specialization[]>(this.carSpecUrl, {id: id}, httpOptions).pipe(
            tap(_ => this.unit.log("Special Serv :: Spec Gotten")),
            catchError(this.handleError<Specialization[]>('getCareerSpecs'))
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
