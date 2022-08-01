import { ArticleLayout } from '@/layouts';
import { Character, Sex } from '@/types/models';
import { getHeaders } from '@/utils/articles';
import { useTranslation } from 'next-i18next';
import React, { FC, useEffect, useState } from 'react';

type Props = {
  heroInfo: Character;
};

const CharacterScreen: FC<Props> = ({ heroInfo }) => {
  const [headerIds, setHeaderIds] = useState<string[]>([]);
  const navs = getHeaders(heroInfo?.story ?? '', '##');
  const { t: raceT } = useTranslation('race');
  const { t: sexT } = useTranslation('sex');
  const { t: relT } = useTranslation('relationships');

  useEffect(() => {
    if (document) {
      const headers = document.querySelectorAll('.article-header');
      if (!headerIds.length && navs?.length) {
        setHeaderIds(Array.from(headers).map((elem) => elem.id));
      }
    }
  }, [headerIds.length, navs]);

  return (
    <ArticleLayout
      article={heroInfo?.story ?? ''}
      title={heroInfo?.name ?? ''}
      description={heroInfo?.description}
      mainImage={
        heroInfo.hero_image
          ? `${process.env.STORAGE_URL}${heroInfo.hero_image}`
          : heroInfo.sex === Sex.female
          ? '/female_placeholder.png'
          : '/male_placeholder.png'
      }
      infoTable={[
        { title: 'Пол', value: sexT(heroInfo?.sex ?? 'unknown') },
        { title: 'Раса', value: raceT(heroInfo?.race ?? 'unknown') },
        {
          title: 'Годы жизни',
          value: `${heroInfo?.birth_date ?? '?'} - ${
            heroInfo?.death_date ?? '?'
          }`,
        },
        ...(heroInfo?.family?.map((relative) => ({
          title: relT(relative.related_as as string),
          value: relative.name ?? '?',
        })) ?? []),
      ]}
    />
  );
};

export default CharacterScreen;
