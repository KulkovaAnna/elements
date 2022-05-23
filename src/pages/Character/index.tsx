import { useQuery } from '@apollo/client';
import LoadingScreen from 'components/LoadingScreen';
import { GET_CHARACTER_BY_ID } from 'graphql/queries';
import { ArticleLayout } from 'layouts';
import React, { FC, useEffect, useLayoutEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { GetCharacterByIdInput, GetCharacterByIdResponse } from 'types/graphql';
import { getHeaders } from 'utils/articles';

type Props = {};

const CharacterPage: FC<Props> = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, loading } = useQuery<
    GetCharacterByIdResponse,
    GetCharacterByIdInput
  >(GET_CHARACTER_BY_ID, { variables: { id: Number(id) } });
  const [headerIds, setHeaderIds] = useState<string[]>([]);
  const heroInfo = data?.getCharacterById;
  const navs = getHeaders(heroInfo?.story ?? '', '##');

  useLayoutEffect(() => {
    if (data && !data.getCharacterById) {
      navigate('/404');
    }
  }, [data, navigate]);

  useEffect(() => {
    const headers = document.querySelectorAll('.article-header');
    if (!headerIds.length && navs?.length) {
      setHeaderIds(Array.from(headers).map((elem) => elem.id));
    }
  }, [headerIds.length, navs]);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <ArticleLayout
      article={heroInfo?.story ?? ''}
      title={heroInfo?.name ?? ''}
      description={heroInfo?.description}
      mainImage={heroInfo?.hero_image}
      navPath={[
        { title: 'Персонажи', to: '/characters' },
        { title: heroInfo?.name ?? '', to: '#' },
      ]}
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

export default CharacterPage;
