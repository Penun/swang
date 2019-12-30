export class Armor {
    id: number;
    type: string;
    defense: number;
    soak: number;
    price: number;
    restricted: boolean;
    encumbrance: number;
    hard_points: number;
    rarity: number;
    description: string;
    book: string;
}

export class ArmorModel {
    model: string;
    armor: Armor;
}
