import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

import { UnitService } from '../../unit.service';
import { CareersService } from '../careers.service';
import { SkillsService } from '../../services/skills.service';

import { Talent } from '../../object-types/talent';

@Component({
    selector: 'app-careers-spec-talent',
    templateUrl: './careers-spec-talent.component.html',
    styleUrls: ['./careers-spec-talent.component.css']
})
export class CareersSpecTalentComponent implements OnInit {
    private carId: number;
    private specId: number;
    private talent$: Observable<Talent>;

    constructor(
        private unit: UnitService,
        private careerServ: CareersService,
        private skilServ: SkillsService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.unit.log("Career SPec Taletn Component :: Tale INIT");
        let map: ParamMap = null;
        this.route.paramMap.subscribe(mapo => map = mapo);
        this.carId = this.careerServ.getCurCareerId();
        this.specId = this.careerServ.getCurSpecId();
        let t_id: number;
        t_id = +map.get('t_id');
        this.talent$ = this.careerServ.getTalent(t_id);
    }
}
