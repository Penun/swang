import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import { SpeciesService } from '../services/species.service';
import { UnitService } from '../services/unit.service';

import { Species } from '../object-types/species';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css']
})
export class SpeciesComponent implements OnInit {
    species: Species[];
    curSpec: Species;
    lastSort: string;

    constructor(
        private unit: UnitService,
        private specServ: SpeciesService
    ) { }

    ngOnInit() {
        this.unit.log("Spec Comp :: Init");
        this.specServ.getSpecies()
            .subscribe(species => this.species = species);
    }

    revealSpecies(spec: Species): void {
        this.unit.log(`Spec Comp :: revealSpecies :: ${spec.name}`);
        if (spec.attributes == null){
            this.specServ.getSpecAttr(spec.id)
                .subscribe(attributes => spec.attributes = attributes);
        }
        this.curSpec = spec;
    };

    closePanel(): void {
        this.curSpec = null;
    }

    sortSpecies(varName: string): void {
        if (this.lastSort != varName + "desc"){
            for (let i: number = 0; i < this.species.length; i++){
                let minInd: number = i;
                for (let j: number = i; j < this.species.length; ++j){
                    if (this.species[j][varName] > this.species[minInd][varName]){
                        minInd = j;
                    }
                }
                [this.species[i], this.species[minInd]] = [this.species[minInd], this.species[i]];
            }
            this.lastSort = varName + "desc";
        } else {
            for (let i: number = 0; i < this.species.length; i++){
                let minInd: number = i;
                for (let j: number = i; j < this.species.length; ++j){
                    if (this.species[j][varName] < this.species[minInd][varName]){
                        minInd = j;
                    }
                }
                [this.species[i], this.species[minInd]] = [this.species[minInd], this.species[i]];
            }
            this.lastSort = varName + "asc";
        }
    };
}
