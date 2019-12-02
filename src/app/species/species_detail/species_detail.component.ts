import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { UnitService } from '../../unit.service';
import { SpeciesService } from '../species.service';

import { Species, SpeAttribute } from '../../object-types/species';

@Component({
  selector: 'app-species-detail',
  templateUrl: './species_detail.component.html',
  styleUrls: ['./species_detail.component.css']
})
export class SpeciesDetailComponent implements OnInit {
    private species$: Observable<Species>;
    private attrs$: Observable<SpeAttribute[]>;

    constructor(
        private unit: UnitService,
        private specServ: SpeciesService,
        private route: ActivatedRoute,
        private router: Router
    ) {
        this.species$ = null;
        this.attrs$ = null;
    }

    ngOnInit() {
        this.unit.log("Spec Det Comp :: Init");
        let map: ParamMap = null;
        let id: string = null;
        this.route.paramMap.subscribe(mapo => map = mapo);
        id = map.get('id');
        this.species$ = this.specServ.getSpeciesId(+id);
        this.attrs$ = this.specServ.getSpecAttr(+id);
    }
}
