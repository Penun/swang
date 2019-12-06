import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { Character } from '../object-types/character';
import { Species } from '../object-types/species';
import { Career } from '../object-types/career';
import { Specialization } from '../object-types/specialization';

import { UnitService } from '../unit.service';
import { CharactersService } from '../services/characters.service';
import { SpeciesService } from '../species/species.service';
import { CareersService } from '../careers/careers.service';

@Component({
    selector: 'app-characters',
    templateUrl: './characters.component.html',
    styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
    @ViewChild("name", { static: false }) nameField: ElementRef;
    characters: Character[];
    curChar: Character;
    nameEdit: boolean;
    speciesEdit: boolean;
    careerEdit: boolean;

    curList: string;

    species: Species[];
    curSpec: Species;

    careers: Career[];
    curCareer: Career;
    curSpecial: Specialization;

    constructor(
        private unit: UnitService,
        private charServ: CharactersService,
        private specServ: SpeciesService,
        private careerServ: CareersService
    ) { }

    ngOnInit() {
        this.unit.log("Character Component :: Init");
        this.charServ.getCharacters()
            .subscribe(characters => this.characters = characters);
        this.curList = "characters";
        this.curChar = null;
        this.nameEdit = false;
        this.speciesEdit = false;
        this.careerEdit = false;
        this.species = null;
        this.curSpec = null;
        this.careers = null;
        this.curCareer = null;
        this.curSpecial = null;
    }

    addCharacter() {
        this.unit.log("Character Component :: Add Begin");
        this.curChar = new Character();
    }

    editName() {
        if (this.nameEdit){
            this.nameEdit = false;
        } else {
            this.nameEdit = true;
            setTimeout(() => this.nameField.nativeElement.select());
        }
    }

    editSpecies() {
        if (this.speciesEdit){
            this.speciesEdit = false;
            this.curList = "characters";
            this.curSpec = null;
        } else {
            this.speciesEdit = true;
            if (this.species == null){
                this.specServ.getSpecies()
                    .subscribe(species => this.species = species);
            }
            this.curList = "species";
        }
    }

    showSpeciesDetails(spec: Species) {
        this.curSpec = spec;
    }

    setSpecies() {
        this.curChar.species = this.curSpec;
        this.curChar.total_xp = this.curSpec.starting_xp;
        this.editSpecies();
    }

    editCareer() {
        if (this.careerEdit){
            this.careerEdit = false;
            this.curList = "characters";
            this.curCareer = null;
        } else {
            this.careerEdit = true;
            if (this.careers == null){
                this.careerServ.getCareers()
                    .subscribe(careers => this.careers = careers);
            }
            this.curList = "careers";
        }
    }

    showCareerDetails(career: Career) {
        this.curCareer = career;
        this.curSpecial = null;
    }

    showSpecial(spec: Specialization) {
        if (this.curSpecial !== null && spec === null){
            this.curSpecial = null;
        } else {
            this.curSpecial = spec;
        }
    }

    setCareer() {
        this.curChar.career = this.curCareer;
        this.editCareer();
    }
}
