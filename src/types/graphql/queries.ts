import { Chapter, Character, Role } from 'types/models';

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
  getChapters: {
    chapters: Chapter[];
    total: number;
    nextOrder: number | null;
  };
};

export type GetChapterByOrderResponse = {
  getNthChapter: {
    chapter: Chapter;
    prev: number;
    next: number;
    total: number;
  };
};

export type GetChapterByOrderInput = {
  order: number;
};
