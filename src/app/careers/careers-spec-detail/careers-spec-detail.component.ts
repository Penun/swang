import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { UnitService } from '../../unit.service';
import { CareersService } from '../careers.service';
import { SkillsService } from '../../services/skills.service';

import { Specialization } from '../../object-types/specialization';
import { Skill } from '../../object-types/skill';
import { Talent } from '../../object-types/talent';

@Component({
    selector: 'app-careers-spec-detail',
    templateUrl: './careers-spec-detail.component.html',
    styleUrls: ['./careers-spec-detail.component.css']
})
export class CareersSpecDetailComponent implements OnInit {
    private carId: number;
    private specId$: Observable<number>;
    private special$: Observable<Specialization>;
    private skills$: Observable<Skill[]>;

    constructor(
        private unit: UnitService,
        private careerServ: CareersService,
        private skilServ: SkillsService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.unit.log("Career Spec Detail Component :: Init");
        let map: ParamMap = null;
        this.carId = this.careerServ.getCurCareerId();
        this.specId$ = this.route.paramMap.pipe(
            switchMap((params: ParamMap) => {
                this.unit.log("Career Spec Detail Component :: Switchmap");
                let s_id = +params.get('s_id');
                this.careerServ.setCurSpecId(s_id);
                this.special$ = this.careerServ.getSpecialization(s_id);
                this.skills$ = this.skilServ.getSpecSkills(s_id);
                return of(s_id);
            })
        );
        let temp: number;
        this.specId$.subscribe(num => temp = num);
        this.special$ = this.careerServ.getSpecialization(temp);
        this.skills$ = this.skilServ.getSpecSkills(temp);
    }
}
