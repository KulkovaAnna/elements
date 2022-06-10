import { gql } from '@apollo/client';

export const GET_CHARACTERS_FOR_CONTENTS = gql`
  query getCharacters {
    getCharacters {
      id
      name
      thumbnail_image
      role
    }
  }
`;

export const GET_CHARACTER_BY_ID = gql`
  query getCharacterById($id: Int!) {
    getCharacterById(id: $id) {
      id
      name
      story
      description
      hero_image
      full_name
      sex
      race
      birth_date
      death_date
      family {
        id
        name
        related_as
        relative_id
      }
    }
  }
`;

export const GET_CONTENTS = gql`
  query getChapters {
    getChapters {
      chapters {
        id
        title
        order
      }
    }
  }
`;

export const GET_CHAPTER_BY_ORDER = gql`
  query getNthChapter($order: Int!) {
    getNthChapter(order: $order) {
      chapter {
        id
        title
        content
        order
      }
      next
      prev
      total
    }
  }
`;
