import {
  ACTIVE_LINK_COLOR,
  LIGHT_THEME_BACKGROUND,
  MENU_ICON_COLOR,
} from '@/constants/colors';
import { MQ_TABLET } from '@/constants/media';
import {
  OFFSET_BIG,
  OFFSET_SMALL,
  OFFSET_SMALL_PLUS,
  OFFSET_TINY,
} from '@/constants/offsets';
import { WIDTH_ARTICLE } from '@/constants/sizes';
import styled from '@emotion/styled';

export const Container = styled.div({
  display: 'flex',
  width: '100%',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
  paddingTop: OFFSET_BIG,
  fontSize: 20,
});

export const Block = styled.div({
  position: 'relative',
  maxWidth: WIDTH_ARTICLE,
  width: '100%',
});

export const Paragraph = styled.p({
  fontSize: 20,
  margin: OFFSET_SMALL_PLUS,
  lineHeight: 1.45,
  textAlign: 'justify',
});

export const Title = styled.p({
  fontSize: 26,
  fontWeight: '600',
  margin: `${OFFSET_SMALL_PLUS}px 0`,
  fontFamily: "'Playfair Display', -apple-system, BlinkMacSystemFont",
});

export const TitleWrapper = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'sticky',
  top: 0,
  backgroundColor: LIGHT_THEME_BACKGROUND,
  marginLeft: OFFSET_SMALL_PLUS,
  '& > *:first-child': {
    '& *': {
      color: MENU_ICON_COLOR,
    },
    '&:active *': {
      color: ACTIVE_LINK_COLOR,
    },
    display: 'none',
    [MQ_TABLET]: {
      display: 'block',
    },
  },
});

export const Navigation = styled.div({
  display: 'flex',
  alignItems: 'center',
  paddingRight: OFFSET_SMALL,
  '& > *': {
    marginLeft: OFFSET_TINY,
  },
});

export const MenuLink = styled.a({
  '*': {
    color: MENU_ICON_COLOR,
    '&:active *': {
      color: ACTIVE_LINK_COLOR,
    },
  },
});
