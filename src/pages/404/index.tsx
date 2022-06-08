import React from 'react';
import { useLocation } from 'react-router-dom';
import { CenteredContainer, Description, Title404 } from './styles';

export default function Page404() {
  let description = 'Страница не найдена';
  const path = useLocation();
  if (path.pathname.match('/contents')) {
    description = 'Глава ещё не написана :(';
  }
  return (
    <CenteredContainer>
      <Title404>404</Title404>
      <Description>{description}</Description>
    </CenteredContainer>
  );
}
