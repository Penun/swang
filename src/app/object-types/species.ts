export class Species {
    id: number;
    name: string;
    brawn: number;
    agility: number;
    intellect: number;
    cunning: number;
    willpower: number;
    presence: number;
    wound_threshold: number;
    strain_threshold: number;
    starting_xp: number;
    ref_page: string;
    img_name: string;
    attributes: SpeAttribute[];
}

export class SpeAttribute {
    id: number;
    description: string;
}
