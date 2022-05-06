import { useQuery } from '@apollo/client';
import { GET_CHARACTER_BY_ID } from 'graphql/queries';
import React, { FC, useEffect } from 'react';
import { ReactImageGalleryItem } from 'react-image-gallery';
import { useParams } from 'react-router-dom';
import { GetCharacterByIdInput, GetCharacterByIdResponse } from 'types/graphql';
import {
  Container,
  Description,
  HalfBlock,
  HeroImage,
  Name,
  Paragraph,
  RightBlock,
  Title,
  TitleWrapper,
} from './styles';

type Props = {};

const images: ReactImageGalleryItem[] = [];

const CharacterPage: FC<Props> = () => {
  const { id } = useParams();
  const { data } = useQuery<GetCharacterByIdResponse, GetCharacterByIdInput>(
    GET_CHARACTER_BY_ID,
    { variables: { id: Number(id) } }
  );
  const heroInfo = data?.getCharacterById;

  const story = heroInfo?.story?.split('\\n');

  useEffect(() => {
    if (heroInfo?.hero_image) {
      images.push({ original: heroInfo.hero_image });
    }
    if (heroInfo?.images?.length) {
      images.push(...heroInfo.images.map((img) => ({ original: img })));
    }
  }, [heroInfo]);

  return (
    <Container>
      <HalfBlock>
        <Name>{heroInfo?.name}</Name>
        <HeroImage
          src={`${process.env.REACT_APP_STORAGE_URL}/${heroInfo?.hero_image}`}
        />
      </HalfBlock>
      <RightBlock>
        <TitleWrapper>
          <Title>{heroInfo?.name}</Title>
          {heroInfo?.full_name && <Title>&nbsp;({heroInfo?.full_name})</Title>}
        </TitleWrapper>
        <Description>{heroInfo?.description}</Description>
        <Title>История</Title>
        {story?.map((p, index) => (
          <Paragraph key={index}>{p}</Paragraph>
        ))}
      </RightBlock>
    </Container>
  );
};

export default CharacterPage;
