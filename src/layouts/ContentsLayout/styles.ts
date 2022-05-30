import styled from '@emotion/styled';
import { NavHeader } from 'components';

export const Container = styled.div({
  display: 'flex',
});

export const ArticleWrapper = styled.div({
  display: 'flex',
  flexGrow: 1,
  alignItems: 'center',
  flexDirection: 'column',
});

export const Navigation = styled(NavHeader)({
  alignSelf: 'flex-start',
  marginLeft: 15,
});
