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

export type User = {
  id: number;
  email: string;
  isAdmin: boolean;
  password: string;
};

export type PublicUser = Omit<User, 'id'>;

export type Chapter = {
  id: number;
  order: number;
  title?: string;
  content?: string;
};
