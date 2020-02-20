import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { UnitService } from '../unit.service';

import { Skill } from '../object-types/skill';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

    private skillsUrl: string;
    private carSkillUrl: string;
    private specSkillUrl: string;

    constructor(
        private unit: UnitService,
        private http: HttpClient
    ) {
        this.skillsUrl = '/index.php/skills';
        this.carSkillUrl = '/index.php/careers/skills';
        this.specSkillUrl = '/index.php/specializations/skills';
    }

    getSkills(): Observable<Skill[]> {
        this.unit.log('Skill Serv :: Skills Began');
        return this.http.get<Skill[]>(this.skillsUrl).pipe(
            tap(_ => this.unit.log('Skill Serv :: Skills Gotten')),
            catchError(this.handleError('getSkills', []))
        );
    }

    getCareerSkills(id: number): Observable<Skill[]> {
        this.unit.log("Skill Serv :: Career Skills Began");
        return this.http.post<Skill[]>(this.carSkillUrl, {id: id}, httpOptions).pipe(
            tap(_ => this.unit.log("Skill Serv :: Career Skills Gotten")),
            catchError(this.handleError<Skill[]>('getCareerSkills'))
        );
    }

    getSpecSkills(id: number): Observable<Skill[]> {
        this.unit.log("Skill Serv :: Spec Skills Began");
        return this.http.post<Skill[]>(this.specSkillUrl, {id: id}, httpOptions).pipe(
            tap(_ => this.unit.log("Skill Serv :: Spec Skills Gotten")),
            catchError(this.handleError<Skill[]>('getSpecSkills'))
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
