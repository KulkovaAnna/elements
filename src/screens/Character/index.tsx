import { ArticleLayout } from '@/layouts';
import { Character } from '@/types/models';
import { getHeaders } from '@/utils/articles';
import React, { FC, useEffect, useState } from 'react';

type Props = {
  heroInfo: Character;
};

const CharacterScreen: FC<Props> = ({ heroInfo }) => {
  const [headerIds, setHeaderIds] = useState<string[]>([]);
  const navs = getHeaders(heroInfo?.story ?? '', '##');

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
      mainImage={heroInfo?.hero_image}
      infoTable={[
        { title: 'Пол', value: heroInfo?.sex ?? '?' },
        { title: 'Раса', value: heroInfo?.race ?? '?' },
        {
          title: 'Годы жизни',
          value: `${heroInfo?.birth_date ?? '?'} - ${
            heroInfo?.death_date ?? '?'
          }`,
        },
        ...(heroInfo?.family?.map((relative) => ({
          title: relative.related_as as string,
          value: relative.name ?? '?',
        })) ?? []),
      ]}
    />
  );
};

export default CharacterScreen;
