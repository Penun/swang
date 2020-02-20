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
    private species: Species;
    private attrs: SpeAttribute[];

    constructor(
        private unit: UnitService,
        private specServ: SpeciesService,
        private route: ActivatedRoute,
        private router: Router
    ) {
        this.species = null;
        this.attrs = null;
    }

    ngOnInit() {
        this.unit.log("Spec Det Comp :: Init");
        let map: ParamMap = null;
        let id: string = null;
        this.route.paramMap.subscribe(mapo => map = mapo);
        id = map.get('id');
        this.specServ.getSpeciesId(+id)
            .subscribe(specs => this.species = specs, null, () => {
                this.unit.log("ID:"+this.species.id);
                if (typeof(this.species) === 'undefined' || this.species.id === null || this.species.name === ""){
                    this.router.navigate(['/index.php/species']);
                } else {
                    this.specServ.getSpecAttr(+id)
                        .subscribe(attrs => this.attrs = attrs);
                }
            }
        );
    }
}
