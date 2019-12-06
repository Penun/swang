import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { UnitService } from '../unit.service';

import { Career } from '../object-types/career';
import { Specialization } from '../object-types/specialization';
import { Talent } from '../object-types/talent';

import { CAREERS, SPECTWO, TALEONE } from '../mock-careers';

@Injectable({
    providedIn: 'root'
})
export class CareersService {
    private curCareerId: number;
    private curSpecId: number;

    setCurCareerId(id: number): void { this.curCareerId = id; }
    getCurCareerId(): number { return this.curCareerId; }
    setCurSpecId(id: number): void { this.curSpecId = id; }
    getCurSpecId(): number { return this.curSpecId; }

    constructor(
        private unit: UnitService
    ) {
        this.curCareerId = 0;
        this.curSpecId = 0;
    }

    getCareers(): Observable<Career[]> {
        this.unit.log("Career Serv :: Careers Began");
        return of(CAREERS);
    }

    getCareer(id: number): Observable<Career> {
        this.unit.log("Career Serv :: CarrerID Began");
        return of(CAREERS[0]);
    }

    getCurCareer(): Observable<Career> {
        if (this.curCareerId > 0){
            return this.getCareer(this.curCareerId);
        } else {
            return null;
        }
    }

    getSpecializations(id: number): Observable<Specialization[]> {
        this.unit.log("Career Serv :: Specializations Began");
        return of(SPECTWO);
    }

    getSpecialization(id: number): Observable<Specialization> {
        this.unit.log("Career Serv :: Specialization Id Began");
        return of(SPECTWO[0]);
    }

    getSpecTalents(id: number): Observable<Talent[]> {
        this.unit.log("Career Serv :: Spec Talents Began");
        return of(TALEONE);
    }

    getTalent(id: number): Observable<Talent> {
        this.unit.log("Career Serv :: Talents Began");
        return of(TALEONE[0]);
    }
}
