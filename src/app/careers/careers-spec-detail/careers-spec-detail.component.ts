import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

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
    private specId: number;
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
        this.route.paramMap.subscribe(mapo => map = mapo);
        this.carId = this.careerServ.getCurCareerId();
        this.specId = +map.get('s_id');
        this.special$ = this.careerServ.getSpecialization(this.specId);
        this.careerServ.setCurSpecId(this.specId);
        this.skills$ = this.skilServ.getSpecSkills(this.specId);
    }
}
