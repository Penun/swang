import { Skill } from './skill';

export class Weapon {
    id: number;
    type: string;
    sub_type: string;
    name: string;
    skill: Skill;
    damage: number;
    damage_add: boolean;
    critical: number;
    range: string;
    encumbrance: number;
    hard_points: number;
    price: number;
    restricted: boolean;
    rarity: number;
    special: string;
    description: string;
    book: string;
}

export class WeaponModel {
    model: string;
    weapon: Weapon;
}
