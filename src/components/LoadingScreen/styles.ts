import styled from '@emotion/styled';
import { MENU_ICON_COLOR } from '@/constants/colors';

export const CenteredContainer = styled.div({
  display: 'flex',
  width: '100%',
  height: '100vh',
  alignItems: 'center',
  justifyContent: 'center',
  '& *': {
    color: MENU_ICON_COLOR,
  },
});
