import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { UnitService } from '../../unit.service';
import { SpeciesService } from '../species.service';

import { Species } from '../../object-types/species';

@Component({
  selector: 'app-species-detail',
  templateUrl: './species_detail.component.html',
  styleUrls: ['./species_detail.component.css']
})
export class SpeciesDetailComponent implements OnInit {
    private species$: Observable<Species>;

    constructor(
        private unit: UnitService,
        private specServ: SpeciesService,
        private route: ActivatedRoute,
    ) { }

    ngOnInit() {
        this.unit.log("Spec Det Comp :: Init");
        this.species$ = this.route.paramMap.pipe(
            switchMap((params: ParamMap) =>
                this.specServ.getSpeciesId(params.get('id')))
        );
    }
}
