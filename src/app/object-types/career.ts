import { Specialization } from './specialization';

export class Career {
    id: number;
    name: string;
    skill_slots: number;
    skills: number[];
    specializations: Specialization[];
}
