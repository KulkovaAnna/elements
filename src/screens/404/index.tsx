import React from 'react';
import { CenteredContainer, Description, Title404 } from './styles';

interface Props {
  description?: string;
}

export default function Page404({
  description = 'Страница не найдена',
}: Props) {
  return (
    <CenteredContainer>
      <Title404>404</Title404>
      <Description>{description}</Description>
    </CenteredContainer>
  );
}
