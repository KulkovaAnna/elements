import { LIGHT_THEME_BACKGROUND } from '@/constants/colors';
import { OFFSET_DEFAULT_PLUS } from '@/constants/offsets';
import styled from '@emotion/styled';

export const CenteredContainer = styled.div({
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  backgroundColor: LIGHT_THEME_BACKGROUND,
});

export const Title404 = styled.p({
  fontSize: 64,
  marginBottom: OFFSET_DEFAULT_PLUS,
});

export const Description = styled.p({
  fontSize: OFFSET_DEFAULT_PLUS,
});
