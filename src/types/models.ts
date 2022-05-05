export enum Race {
  elf = 'elf',
  human = 'human',
  siren = 'siren',
  goblin = 'goblin',
  verwolf = 'verwolf',
}

export type Character = {
  id: number;
  name?: string;
  description?: string;
  story?: string;
  hero_image?: string;
  images?: string[];
  race?: Race;
  full_name?: string;
};
