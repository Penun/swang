import { Component, OnInit } from '@angular/core';

import { UnitService } from '../services/unit.service';
import { CareersService } from '../services/careers.service';
import { SkillsService } from '../services/skills.service';
import { SpecializationsService } from '../services/specializations.service';

import { Career } from '../object-types/career';
import { Skill } from '../object-types/skill';
import { Specialization } from '../object-types/specialization';
import { Talent } from '../object-types/talent';

@Component({
    selector: 'app-careers',
    templateUrl: './careers.component.html',
    styleUrls: ['./careers.component.css']
})
export class CareersComponent implements OnInit {
    careers: Career[];
    curCar: Career;
    skills: Skill[];
    curSpecial: Specialization;
    talents: Talent[];
    curTale: Talent;

    constructor(
        private unit: UnitService,
        private careerServ: CareersService,
        private skillServ: SkillsService,
        private specialServ: SpecializationsService
    ) { }

    ngOnInit() {
        this.unit.log("Career Component :: Init");
        this.careerServ.getCareers()
            .subscribe(careers => this.careers = careers);
    }

    revealCareer(car: Career): void {
        this.unit.log(`Career Comp :: revealing career :: ${car.name}`);
        if (car.specializations == null){
            this.specialServ.getCareerSpecs(car.id)
                .subscribe(specializations => car.specializations = specializations);
        }
        if (car.skills == null){
            this.skillServ.getCareerSkills(car.id)
                .subscribe(skills => car.skills = skills);
        }
        this.curCar = car;
        this.curSpecial = null;
        this.curTale = null;
    }

    revealSpecialization(spec: Specialization): void {
        this.unit.log(`Career Comp :: revealing specialization :: ${spec.name}`);
        if (spec.skills == null){
            this.skillServ.getSpecSkills(spec.id)
                .subscribe(skills => spec.skills = skills);
        }
        if (spec.talents == null){
            // this.talentsServ.getSpecTalents(spec.id)
            //     .subscribe(talents => spec.talents = talents);
        }
        this.curSpecial = spec;
        this.curTale = null;
    }

    revealTalent(tale: Talent): void {
        this.unit.log(`Career Comp :: revealing talent :: ${tale.name}`);
        this.curTale = tale;
    }

    closeTalent(): void {
        this.unit.log(`Career Comp :: closing talent :: ${this.curTale.name}`);
        this.curTale = null;

    }
}
