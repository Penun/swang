import { Component, OnInit } from '@angular/core';

import { UnitService } from '../unit.service';
import { CareersService } from '../services/careers.service';
import { SkillsService } from '../services/skills.service';

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
        private skilServ: SkillsService
    ) { }

    ngOnInit() {
        this.unit.log("Career Component :: Init");
        this.careerServ.getCareers()
            .subscribe(careers => this.careers = careers);
        this.skilServ.getSkills()
            .subscribe(skills => this.skills = skills);
    }

    revealCareer(car: Career): void {
        this.unit.log(`Career Comp :: revealing career :: ${car.name}`);
        if (car.specializations == null){
            this.careerServ.getSpecializations(car.id)
                .subscribe(specializations => car.specializations = specializations);
        }
        this.curCar = car;
        this.curSpecial = null;
        this.curTale = null;
    }

    revealSpecialization(spec: Specialization): void {
        this.unit.log(`Career Comp :: revealing specialization :: ${spec.name}`);
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
