import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { UnitService } from '../unit.service';

import { Skill } from '../object-types/skill';

import { SKILLS } from '../mock-careers';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

    constructor(
        private unit: UnitService
    ) { }

    getSkills(): Observable<Skill[]> {
        this.unit.log('Skill Serv :: Skills Began');
        return of(SKILLS);
    }
}
