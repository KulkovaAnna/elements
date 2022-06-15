import styled from '@emotion/styled';
import { ACTIVE_LINK_COLOR, CONTENTS_BACKGROUND_COLOR } from 'constants/colors';
import { CONTENT_FONT_FAMILY } from 'constants/font';
import { MQ_MOBILE, MQ_TABLET } from 'constants/media';
import { OFFSET_BIG, OFFSET_DEFAULT } from 'constants/offsets';
import { Link } from 'react-router-dom';

interface IListItem {
  selected?: boolean;
}

interface INavigation {
  opened?: boolean;
}

export const Navigation = styled.nav<INavigation>(({ opened }) => ({
  position: 'fixed',

  flexDirection: 'column',
  top: 0,
  height: '100vh',
  minWidth: 300,
  backgroundColor: CONTENTS_BACKGROUND_COLOR,
  transition: '0.3s ease all',

  marginLeft: opened ? 0 : '-100%',

  [MQ_TABLET]: {
    display: 'flex',
    width: '50%',
  },
  [MQ_MOBILE]: {
    width: '100%',
  },
  display: 'none',
}));

export const MainList = styled.ul({
  overflowY: 'auto',
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  padding: `${OFFSET_DEFAULT}px ${OFFSET_BIG}px`,
});

export const BottomList = styled.ul({
  borderTop: '1px solid rgba(0,0,0, 0.1)',
  display: 'flex',
  flexDirection: 'column',
  padding: `${OFFSET_DEFAULT}px ${OFFSET_BIG}px`,
  transition: '0.3s ease all',
});

export const ListItem = styled.li<IListItem>(({ selected }) => ({
  width: '100%',
  listStyle: 'none',
  fontFamily: CONTENT_FONT_FAMILY,
  fontSize: 18,
  paddingBottom: OFFSET_DEFAULT,
  fontWeight: selected ? 'bold' : 'initial',
  '&:hover, &:hover *': {
    color: ACTIVE_LINK_COLOR,
  },
  '&:last-child': {
    paddingBottom: 0,
  },
}));

export const CloseButton = styled.div({
  position: 'absolute',
  right: 0,
  padding: `${OFFSET_DEFAULT}px ${OFFSET_BIG}px`,
  display: 'flex',
  alignItems: 'center',
  transition: '0.3s ease all',
  justifyContent: 'space-between',
  '& > *:last-child': {
    display: 'block',
  },
  '&:hover *': {
    color: ACTIVE_LINK_COLOR,
  },
});

export const HomeBlockLeft = styled(Link)({
  display: 'flex',
  alignItems: 'center',
  '&:hover *': {
    color: ACTIVE_LINK_COLOR,
  },
});
