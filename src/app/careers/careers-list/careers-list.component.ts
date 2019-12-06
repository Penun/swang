import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


import { UnitService } from '../../unit.service';
import { CareersService } from '../careers.service';

import { Career } from '../../object-types/career';

@Component({
    selector: 'app-careers-list',
    templateUrl: './careers-list.component.html',
    styleUrls: ['./careers-list.component.css']
})
export class CareersListComponent implements OnInit {
    private careers$: Observable<Career[]>;

    constructor(
        private unit: UnitService,
        private careerServ: CareersService
    ) { }

    ngOnInit() {
        this.unit.log("Career List Component :: Init");
        this.careers$ = this.careerServ.getCareers();
    }
}
