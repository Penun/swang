import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import { UnitService } from '../../unit.service';
import { SpeciesService } from '../species.service';

import { Species } from '../../object-types/species';

@Component({
  selector: 'app-species-detail',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css']
})
export class SpeciesComponent implements OnInit {

    constructor(
        private unit: UnitService
    ) { }

    ngOnInit() {
        this.unit.log("Spec Comp :: Init");
    }
}
