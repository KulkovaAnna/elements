import { CenteredContainer, Description, Title404 } from './styles';

export default function Page404() {
  const description = 'Страница не найдена';
  return (
    <CenteredContainer>
      <Title404>404</Title404>
      <Description>{description}</Description>
    </CenteredContainer>
  );
}
