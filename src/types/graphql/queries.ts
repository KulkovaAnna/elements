import { Character, NthChapter, Role } from '@/types/models';
import { Content } from '../models';

type GetByIdInput = {
  id: number;
};

type PaginationInput<T> = {
  input?: {
    from?: T;
    limit?: number;
  };
};

export type GetCharactersForContentsResponse = {
  getCharacters: {
    id: number;
    name?: string;
    thumbnail_image?: string;
    role?: Role;
  }[];
};

export type GetCharacterByIdInput = GetByIdInput;

export type GetCharacterByIdResponse = {
  getCharacterById: Character;
};

export type GetChaptersInput = PaginationInput<number>;

export type GetChaptersResponse = {
  getChapters: Content;
};

export type GetChapterByOrderResponse = {
  getNthChapter: NthChapter;
};

export type GetChapterByOrderInput = {
  order: number;
};
