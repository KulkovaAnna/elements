import { MainLayout } from '@/layouts';
import { Character, Role, Sex } from '@/types/models';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import React, { FC } from 'react';
import {
  Block,
  Container,
  Image,
  ImageWrapper,
  List,
  ListItem,
  Name,
  Title,
} from './styles';

type Heroes = {
  [Role.protagonist]: Partial<Character>[];
  [Role.main]: Partial<Character>[];
  [Role.minor]: Partial<Character>[];
};

type Props = {
  characters: Character[];
};

const CharacterList: FC<Props> = ({ characters }) => {
  const { t } = useTranslation('role');
  const heroes = characters.reduce<Heroes>(
    (acc, item) => {
      if (item.role) {
        acc[item.role].push(item);
      }
      return acc;
    },
    {
      [Role.protagonist]: [],
      [Role.main]: [],
      [Role.minor]: [],
    }
  );
  return (
    <MainLayout>
      <Container>
        <Block>
          {Object.entries(heroes).map(([role, arr]) => (
            <div key={role}>
              {!!arr.length && <Title>{t(role)}</Title>}
              <List>
                {arr.map((hero) => (
                  <ListItem key={hero.id}>
                    <Link href={`/characters/${hero.id}`}>
                      <a>
                        <ImageWrapper>
                          <Image
                            src={
                              hero.thumbnail_image
                                ? `${process.env.STORAGE_URL}${hero.thumbnail_image}`
                                : hero.sex === Sex.female
                                ? '/female_placeholder.png'
                                : '/male_placeholder.png'
                            }
                          />
                        </ImageWrapper>
                        <Name>{hero.name}</Name>
                      </a>
                    </Link>
                  </ListItem>
                ))}
              </List>
            </div>
          ))}
        </Block>
      </Container>
    </MainLayout>
  );
};

export default CharacterList;
