import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import { UnitService } from '../../unit.service';
import { SpeciesService } from '../species.service';

import { Species } from '../../object-types/species';

@Component({
  selector: 'app-species-list',
  templateUrl: './species_list.component.html',
  styleUrls: ['./species_list.component.css']
})
export class SpeciesListComponent implements OnInit {
    species: Species[];
    curSpec: Species;
    lastSort: string;

    constructor(
        private unit: UnitService,
        private specServ: SpeciesService
    ) { }

    ngOnInit() {
        this.unit.log("Spec List Comp :: Init");
        this.specServ.getSpecies()
            .subscribe(species => this.species = species);
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
    }
}
