import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  ACTIVE_LINK_COLOR,
  CONTENTS_BACKGROUND_COLOR,
  IMAGE_BORDER_COLOR,
  LIGHT_THEME_BACKGROUND,
} from '@/constants/colors';
import { CONTENT_FONT_FAMILY } from '@/constants/font';
import { MQ_MOBILE, MQ_TABLET } from '@/constants/media';
import {
  OFFSET_BIG,
  OFFSET_DEFAULT,
  OFFSET_MEDIUM,
  OFFSET_SMALL,
  OFFSET_SMALL_PLUS,
} from '@/constants/offsets';

type WithMainProps = {
  main?: boolean;
};

type ListItemProps = {
  selected?: boolean;
};

export const Main = styled.article({
  padding: `0 ${OFFSET_BIG}px`,
  [MQ_TABLET]: {
    padding: OFFSET_DEFAULT,
  },
});

export const HeroInfo = styled.div<WithMainProps>(() => ({
  justifyContent: 'initial',
  margin: `0 0 ${OFFSET_SMALL}px ${OFFSET_MEDIUM}px`,
  padding: OFFSET_SMALL,
  minWidth: 315,
  maxWidth: '30%',
  float: 'right',
  border: '1px solid #dcdcdc',
  backgroundColor: CONTENTS_BACKGROUND_COLOR,
  borderRadius: 5,
  [MQ_MOBILE]: {
    padding: OFFSET_DEFAULT,
    float: 'initial',
    margin: `${OFFSET_DEFAULT}px auto`,
  },
}));

export const ImageWrapper = styled.div({
  maxWidth: '100%',
  maxHeight: '100%',
  position: 'relative',
  borderRadius: 5,
  border: `1px solid ${IMAGE_BORDER_COLOR}`,
  overflow: 'hidden',
});

export const Name = styled.p({
  gridArea: 'name',
  fontSize: '8vmax',
  fontWeight: '600',
  margin: 0,
  marginBottom: OFFSET_DEFAULT,
  fontFamily: "'Playfair Display', -apple-system, BlinkMacSystemFont",
  borderBottom: '0',
  [MQ_TABLET]: {
    borderBottom: '1px solid rgba(0, 0 , 0, 0.1)',
  },
});

export const Description = styled.span({
  gridArea: 'description',
  fontSize: 18,
  fontWeight: '600',
  lineHeight: 1.3,
  [MQ_TABLET]: {
    width: '100%',
    paddingRight: OFFSET_DEFAULT,
  },
});

export const Paragraph = styled.p({
  fontSize: 20,
  marginBottom: OFFSET_SMALL_PLUS,
  lineHeight: 1.3,
  textAlign: 'justify',
  display: 'block',
  [MQ_TABLET]: {
    display: 'none',
  },
});

export const Title = styled.h2({
  fontSize: 26,
  fontWeight: '600',
  backgroundColor: LIGHT_THEME_BACKGROUND,
  width: '100%',
  fontFamily: "'Playfair Display', -apple-system, BlinkMacSystemFont",
});

export const TitleWrapper = styled.a({
  display: 'flex',
  gridArea: 'fullname',
  alignItems: 'center',
  borderBottom: '1px solid rgba(0, 0, 0, 0.3)',
  padding: `${OFFSET_SMALL}px 0`,
  margin: `${OFFSET_SMALL}px 0`,
  [MQ_TABLET]: {
    borderBottomColor: 'rgba(0, 0 , 0, 0.1)',
  },
});

export const List = styled.ul({});

export const ListItem = styled.li<ListItemProps>(({ selected }) => ({
  listStyle: 'none',
  fontFamily: CONTENT_FONT_FAMILY,
  fontSize: 18,
  paddingBottom: OFFSET_DEFAULT,
  fontWeight: selected ? 'bold' : 'initial',
  '&:hover *': {
    color: ACTIVE_LINK_COLOR,
  },
}));

export const ChevronIcon = styled(FontAwesomeIcon)({
  display: 'none',
  [MQ_TABLET]: {
    display: 'block',
  },
});
