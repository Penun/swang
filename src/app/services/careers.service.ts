import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { UnitService } from './unit.service';

import { Career } from '../object-types/career';
import { Specialization } from '../object-types/specialization';

import { CAREERS } from '../mock-careers';

@Injectable({
    providedIn: 'root'
})
export class CareersService {

    constructor(
        private unit: UnitService
    ) { }

    getCareers(): Observable<Career[]> {
        this.unit.log("Career Serv :: Careers Began");
        return of(CAREERS);
    }

    getSpecializations(id: number): Observable<Specialization[]> {
        this.unit.log("Career Serv :: Specializations Began");
        return null;
    }
}
