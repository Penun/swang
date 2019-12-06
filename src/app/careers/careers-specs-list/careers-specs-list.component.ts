import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';


import { UnitService } from '../../unit.service';
import { CareersService } from '../careers.service';

import { Specialization } from '../../object-types/specialization';

@Component({
    selector: 'app-careers-specs-list',
    templateUrl: './careers-specs-list.component.html',
    styleUrls: ['./careers-specs-list.component.css']
})
export class CareersSpecsListComponent implements OnInit {
    private specializations$: Observable<Specialization[]>;
    private carId: number;
    private menuArrow: string;

    constructor(
        private unit: UnitService,
        private careerServ: CareersService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.unit.log("Car Spec List Comp :: Init");
        let map: ParamMap = null;
        this.route.paramMap.subscribe(mapo => map = mapo);
        this.carId = +map.get('c_id');
        this.specializations$ = this.careerServ.getSpecializations(this.carId);
        this.lightArrow();
    }

    lightArrow(): void {
        this.menuArrow = "menu_arrow.png";
    }

    darkArrow(): void {
        this.menuArrow = "menu_arrow_inv.png";
    }
}
