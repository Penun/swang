export class Gear {
    id: number;
    item: string;
    type: string;
    price: number;
    restricted: boolean;
    encumbrance: number;
    rarity: number;
    description: string;
    book: string;
}

export class GearModel {
    model: string;
    gear: Gear;
}
