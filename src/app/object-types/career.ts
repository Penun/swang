import { Specialization } from './specialization';
import { Skill } from './skill';

export class Career {
    id: number;
    name: string;
    skill_slots: number;
    skills: Skill[];
    specializations: Specialization[];
}
