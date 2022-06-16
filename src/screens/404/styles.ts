import { LIGHT_THEME_BACKGROUND } from '@/constants/colors';
import { OFFSET_DEFAULT_PLUS } from '@/constants/offsets';
import styled from '@emotion/styled';

export const CenteredContainer = styled.div({
  width: '100vw',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  position: 'fixed',
  zIndex: 100,
  top: 0,
  left: 0,
  backgroundColor: LIGHT_THEME_BACKGROUND,
});

export const Title404 = styled.p({
  fontSize: 64,
  marginBottom: OFFSET_DEFAULT_PLUS,
});

export const Description = styled.p({
  fontSize: OFFSET_DEFAULT_PLUS,
});
