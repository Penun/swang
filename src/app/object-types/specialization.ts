import { Talent } from './talent';

export class Specialization {
    id: number;
    name: string;
    subtitle: string;
    skill_slots: number;
    skills: number[];
    talents: Talent[];
}
