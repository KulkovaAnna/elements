import { useQuery } from '@apollo/client';
import { GET_CHARACTERS_FOR_CONTENTS } from 'graphql/queries';
import { MainLayout } from 'layouts';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { GetCharactersForContentsResponse } from 'types/graphql';
import { Character, Role } from 'types/models';
import {
  Block,
  Container,
  List,
  ListItem,
  Image,
  Name,
  Title,
  ImageWrapper,
} from './styles';

type Props = Record<string, never>;

const CharacterList: FC<Props> = () => {
  const { data } = useQuery<GetCharactersForContentsResponse>(
    GET_CHARACTERS_FOR_CONTENTS
  );
  const heroes =
    data?.getCharacters?.reduce(
      (acc, item) => {
        if (item.role) {
          acc[item.role].push(item);
        }
        return acc;
      },
      {
        [Role.protagonist]: [] as Partial<Character>[],
        [Role.main]: [] as Partial<Character>[],
        [Role.minor]: [] as Partial<Character>[],
      }
    ) ?? [];
  return (
    <MainLayout>
      <Container>
        <Block>
          {Object.entries(heroes).map(([role, arr]) => (
            <>
              {!!arr.length && <Title>{role}</Title>}
              <List key={role}>
                {arr.map((hero) => (
                  <ListItem key={hero.id}>
                    <Link to={`/characters/${hero.id}`}>
                      <ImageWrapper>
                        <Image
                          src={`${process.env.REACT_APP_STORAGE_URL}${hero.thumbnail_image}`}
                        />
                      </ImageWrapper>
                      <Name>{hero.name}</Name>
                    </Link>
                  </ListItem>
                ))}
              </List>
            </>
          ))}
        </Block>
      </Container>
    </MainLayout>
  );
};

export default CharacterList;
