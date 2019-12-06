import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

import { UnitService } from '../../unit.service';
import { CareersService } from '../careers.service';

import { Talent } from '../../object-types/talent';

@Component({
    selector: 'app-careers-spec-talent-tree',
    templateUrl: './careers-spec-talent-tree.component.html',
    styleUrls: ['./careers-spec-talent-tree.component.css']
})
export class CareersSpecTalentTreeComponent implements OnInit {
    private carId: number;
    private specId: number;
    private talents: Talent[];

    constructor(
        private unit: UnitService,
        private careerServ: CareersService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.unit.log("Career SPec Talent Tree Component :: Tale INIT");
        let map: ParamMap = null;
        this.route.paramMap.subscribe(mapo => map = mapo);
        this.carId = this.careerServ.getCurCareerId();
        this.specId = this.careerServ.getCurSpecId();
        this.careerServ.getSpecTalents(this.specId)
            .subscribe(tales => this.talents = tales);
    }
}
