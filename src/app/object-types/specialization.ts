import { Talent } from './talent';
import { Skill } from './skill';

export class Specialization {
    id: number;
    name: string;
    subtitle: string;
    skill_slots: number;
    skills: Skill[];
    talents: Talent[];
}
