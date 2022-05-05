import React, { FC, useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Character } from 'types/models';
import { ReactImageGalleryItem } from 'react-image-gallery';
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
import CharacterClient from 'client/CharacterClient';

type Props = {};

const images: ReactImageGalleryItem[] = [];

const CharacterPage: FC<Props> = () => {
  const [heroInfo, setHeroInfo] = useState<Character | null>(null);
  const story = heroInfo?.story?.split('\\n');
  const client = useMemo(() => new CharacterClient(), []);
  const params = useParams();

  useEffect(() => {
    if (params.id) {
      client.getOne(params.id).then(setHeroInfo);
    }
  }, [client, params]);

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
        <HeroImage src={heroInfo?.hero_image} />
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
