import styled from '@emotion/styled';
import { NavHeader } from '@/components';
import { OFFSET_SMALL_PLUS } from '@/constants/offsets';

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
  marginLeft: OFFSET_SMALL_PLUS,
});
