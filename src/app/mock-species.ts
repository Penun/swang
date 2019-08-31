import { Species, SpeAttribute } from './object-types/species';

export const SPECIES: Species[] = [
  { id: 11, name: 'Mr. Nice', brawn: 1, agility: 2, intellect: 3, cunning: 4, willpower: 5, presence: 6, wound_threshold: 7, strain_threshold: 8, starting_xp: 9, ref_page: "25", img_name:"aleena.png", attributes: null },
  { id: 12, name: 'Narco', brawn: 2, agility: 3, intellect: 4, cunning: 5, willpower: 6, presence: 7, wound_threshold: 8, strain_threshold: 9, starting_xp: 10, ref_page: "25", img_name:"zabrak.png", attributes: null },
  { id: 13, name: 'Bombasto', brawn: 3, agility: 4, intellect: 5, cunning: 6, willpower: 7, presence: 8, wound_threshold: 9, strain_threshold: 10, starting_xp: 11, ref_page: "25", img_name:"hutt.png", attributes: null },
  { id: 14, name: 'Celeritas', brawn: 4, agility: 5, intellect: 6, cunning: 7, willpower: 8, presence: 9, wound_threshold: 10, strain_threshold: 11, starting_xp: 12, ref_page: "25", img_name:"wookie.png", attributes: null },
  { id: 15, name: 'Magneta', brawn: 5, agility: 6, intellect: 7, cunning: 8, willpower: 9, presence: 10, wound_threshold: 11, strain_threshold: 12, starting_xp: 13, ref_page: "25", img_name:"dug.png", attributes: null },
  { id: 16, name: 'RubberMan', brawn: 1, agility: 2, intellect: 3, cunning: 4, willpower: 5, presence: 6, wound_threshold: 7, strain_threshold: 8, starting_xp: 9, ref_page: "25", img_name:"rodian.png", attributes: null },
  { id: 17, name: 'Dynama', brawn: 2, agility: 3, intellect: 4, cunning: 5, willpower: 6, presence: 7, wound_threshold: 8, strain_threshold: 9, starting_xp: 10, ref_page: "25", img_name:"trandoshan.png", attributes: null },
  { id: 18, name: 'Dr IQ', brawn: 3, agility: 4, intellect: 5, cunning: 6, willpower: 7, presence: 8, wound_threshold: 9, strain_threshold: 10, starting_xp: 11, ref_page: "25", img_name:"human.png", attributes: null },
  { id: 19, name: 'Magma', brawn: 4, agility: 5, intellect: 6, cunning: 7, willpower: 8, presence: 9, wound_threshold: 10, strain_threshold: 11, starting_xp: 12, ref_page: "25", img_name:"droid.png", attributes: null },
  { id: 20, name: 'Tornado', brawn: 5, agility: 6, intellect: 7, cunning: 8, willpower: 9, presence: 10, wound_threshold: 11, strain_threshold: 12, starting_xp: 13, ref_page: "25", img_name:"selonian.png", attributes: null }
];

export const SPECATTRS: SpeAttribute[] = [
    { id: 11, description: 'Mr nice description' },
    { id: 12, description: 'Narco description'},
    { id: 13, description: 'Bomb description'},
    { id: 13, description: 'Bomb description'},
    { id: 14, description: 'Cel description'},
    { id: 15, description: 'Magn description'},
    { id: 16, description: 'Rubb description'},
    { id: 16, description: 'Rubb description'},
    { id: 16, description: 'Rubb description'},
    { id: 17, description: 'Dynam description. <img src="/static/img/success.png" style="max-height: 3vmin;" />'},
    { id: 18, description: 'Dr sad description'},
    { id: 19, description: 'Magn description'},
    { id: 19, description: 'Magn description'},
    { id: 20, description: 'Torn description'}
];
