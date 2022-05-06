import { Character } from 'types/models';

export type GetCharactersResponse = {
  getCharacters: {
    id: string;
    name?: string;
  }[];
};

export type GetCharacterByIdResponse = {
  getCharacterById: Character;
};

export type GetCharacterByIdInput = {
  id: number;
};
