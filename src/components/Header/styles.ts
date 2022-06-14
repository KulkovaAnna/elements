import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  ACTIVE_LINK_COLOR,
  IMAGE_BORDER_COLOR,
  LIGHT_THEME_BACKGROUND,
} from 'constants/colors';
import { CONTENT_FONT_FAMILY } from 'constants/font';
import { MQ_TABLET } from 'constants/media';
import { OFFSET_DEFAULT, OFFSET_SMALL } from 'constants/offsets';
import { Link } from 'react-router-dom';

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

export const LinkItem = styled(Link)({
  '&:hover': {
    color: ACTIVE_LINK_COLOR,
  },
  fontFamily: CONTENT_FONT_FAMILY,
  fontSize: 18,
  padding: OFFSET_DEFAULT,
  lineHeight: 1,
  display: 'flex',
  alignItems: 'center',
});

export const ReadLink = styled(LinkItem)({
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
