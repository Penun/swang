import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

import { UnitService } from '../../unit.service';
import { CareersService } from '../careers.service';
import { SkillsService } from '../../services/skills.service';

import { Career } from '../../object-types/career';
import { Skill } from '../../object-types/skill';

@Component({
    selector: 'app-careers-detail',
    templateUrl: './careers-detail.component.html',
    styleUrls: ['./careers-detail.component.css']
})
export class CareersDetailComponent implements OnInit {
    private career$: Observable<Career>;
    private skills$: Observable<Skill[]>;

    constructor(
        private unit: UnitService,
        private careerServ: CareersService,
        private skilServ: SkillsService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.unit.log("Career Detail Component :: Init");
        let map: ParamMap = null;
        let id: string = null;
        this.route.paramMap.subscribe(mapo => map = mapo);
        id = map.get('c_id');
        this.career$ = this.careerServ.getCareer(+id);
        this.careerServ.setCurCareerId(+id);
        this.skills$ = this.skilServ.getCarSkills(+id);
    }
}
