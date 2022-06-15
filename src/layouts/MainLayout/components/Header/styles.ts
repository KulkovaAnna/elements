import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  ACTIVE_LINK_COLOR,
  IMAGE_BORDER_COLOR,
  LIGHT_THEME_BACKGROUND,
} from 'constants/colors';
import { MQ_TABLET } from 'constants/media';
import { OFFSET_DEFAULT, OFFSET_SMALL } from 'constants/offsets';
import { Link } from 'react-router-dom';
import NotFinishedItem from '../NotFinishedItem';

export const Container = styled.nav({
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
  borderBottom: `1px solid ${IMAGE_BORDER_COLOR}`,
  position: 'relative',
  backgroundColor: LIGHT_THEME_BACKGROUND,
  height: 60,
  alignItems: 'center',
  [MQ_TABLET]: {
    justifyContent: 'space-between',
  },
  zIndex: 100,
});

export const MainBlock = styled.div({
  display: 'flex',
  justifyContent: 'center',
  [MQ_TABLET]: {
    display: 'none',
  },
});

export const ReadLink = styled(NotFinishedItem)({
  fontSize: 22,
  fontWeight: 600,
});

export const LogoLink = styled(Link)({
  left: OFFSET_DEFAULT,
  display: 'flex',
  alignItems: 'center',
  position: 'absolute',
  height: '100%',
  [MQ_TABLET]: {
    right: OFFSET_DEFAULT,
    left: 'auto',
  },
});

export const Logo = styled.img({
  height: OFFSET_DEFAULT * 2,
  objectFit: 'cover',
});

export const MenuIcon = styled(FontAwesomeIcon)({
  marginLeft: OFFSET_SMALL,
  display: 'none',
  '&:hover': {
    cursor: 'pointer',
    '& *': {
      color: ACTIVE_LINK_COLOR,
    },
  },
  [MQ_TABLET]: {
    display: 'block',
  },
});
