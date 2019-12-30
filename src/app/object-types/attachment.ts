export class Attachment {
    id: number;
    name: string;
    type: string;
    price: number;
    restricted: boolean;
    encumbrance: number;
    hp_required: number;
    rarity: number;
    description: string;
    book: string;
    base_mod: string;
}

export class AttachmentModel {
    model: string;
    attachment: Attachment;
}
