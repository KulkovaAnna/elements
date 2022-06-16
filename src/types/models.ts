export enum Race {
  elf = 'elf',
  human = 'human',
  siren = 'siren',
  goblin = 'goblin',
  verwolf = 'verwolf',
}

export enum Sex {
  male = 'male',
  female = 'female',
  other = 'other',
}

export enum Relationship {
  sister = 'sister',
  brother = 'brother',
  mother = 'mother',
  father = 'father',
  wife = 'wife',
  husband = 'husband',
  son = 'son',
  daughter = 'daughter',
  grandmother = 'grandmother',
  grandfather = 'grandfather',
  grandson = 'grandson',
  granddaughter = 'granddaughter',
  uncle = 'uncle',
  aunt = 'aunt',
  nephew = 'nephew',
  niece = 'niece',
  stepmother = 'stepmother',
  stepfather = 'stepfather',
  stepson = 'stepson',
  stepdaughter = 'stepdaughter',
}

export enum Role {
  protagonist = 'protagonist',
  main = 'main',
  minor = 'minor',
}

export type Family = {
  id: number;
  relative_id: number;
  name?: string;
  related_as?: Relationship;
};

export type Character = {
  id: number;
  name?: string;
  description?: string;
  story?: string;
  hero_image?: string;
  thumbnail_image?: string;
  race?: Race;
  full_name?: string;
  sex?: Sex;
  birth_date?: number;
  death_date?: number;
  family?: Family[];
  role?: Role;
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

export type Content = {
  chapters: Chapter[];
  total: number;
  nextOrder: number | null;
};

export type NthChapter = {
  chapter: Chapter;
  prev: number;
  next: number;
  total: number;
};
