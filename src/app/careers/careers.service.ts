import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { UnitService } from '../unit.service';

import { Career } from '../object-types/career';
import { Specialization } from '../object-types/specialization';
import { Talent } from '../object-types/talent';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})
export class CareersService {
    private careersUrl: string;
    private specializationsUrl: string;
    private talentsUrl: string;
    private careers$: Observable<Career[]>;
    private curCareerId: number;
    private curSpecId: number;

    setCurCareerId(id: number): void { this.curCareerId = id; }
    getCurCareerId(): number { return this.curCareerId; }
    setCurSpecId(id: number): void { this.curSpecId = id; }
    getCurSpecId(): number { return this.curSpecId; }

    constructor(
        private unit: UnitService,
        private http: HttpClient
    ) {
        this.careersUrl = '/careers/list';
        this.specializationsUrl = '/careers/specializations';
        this.talentsUrl = 'specializations/talents';
        this.careers$ = null;
        this.curCareerId = 0;
        this.curSpecId = 0;
    }

    getCareers(): Observable<Career[]> {
        this.unit.log("Career Serv :: Careers Began");
        if (this.careers$ === null){
            this.careers$ = this.http.get<Career[]>(this.careersUrl).pipe(
                tap(_ => this.unit.log('Career Serv :: Careers Gotten')),
                catchError(this.handleError('getCareers', []))
            );
        }
        return this.careers$;
    }

    getCareer(id: number): Observable<Career> {
        this.unit.log("Career Serv :: CarrerID Began");
        return this.getCareers().pipe(
            map((careers: Career[]) => careers.find(care => care.id === id))
        );
    }

    getCurCareer(): Observable<Career> {
        if (this.curCareerId > 0){
            return this.getCareer(this.curCareerId);
        }
        return null;
    }

    getSpecializations(id: number): Observable<Specialization[]> {
        this.unit.log("Career Serv :: Specializations Began");
        return this.http.post<Specialization[]>(this.specializationsUrl, {id: id}, httpOptions).pipe(
            tap(_ => this.unit.log("Career Spec Serv :: Spec Gotten")),
            catchError(this.handleError<Specialization[]>('getSpecializations'))
        );
    }

    getSpecialization(id: number): Observable<Specialization> {
        this.unit.log("Career Serv :: Specialization Id Began");
        if (this.curCareerId > 0) {
            return this.getSpecializations(this.curCareerId).pipe(
                map((specials: Specialization[]) => specials.find(spec => spec.id === id))
            );
        }
        return null;
    }

    getSpecTalents(id: number): Observable<Talent[]> {
        this.unit.log("Career Serv :: Spec Talents Began");
        return this.http.post<Talent[]>(this.talentsUrl, {id: id}, httpOptions).pipe(
            tap(_ => this.unit.log("Career Spec Serv :: Talent Gotten")),
            catchError(this.handleError<Talent[]>('getSpecTalents'))
        );
    }

    getTalent(id: number): Observable<Talent> {
        this.unit.log("Career Serv :: Talent Began");
        if (this.curSpecId > 0) {
            return this.getSpecTalents(this.curSpecId).pipe(
                map((talents: Talent[]) => talents.find(tale => tale.id === id))
            );
        }
        return null;
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
