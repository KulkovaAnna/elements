import styled from '@emotion/styled';
import {
  ACTIVE_LINK_COLOR,
  CONTENTS_BACKGROUND_COLOR,
  MENU_ICON_COLOR,
} from 'constants/colors';
import { CONTENT_FONT_FAMILY } from 'constants/font';
import { MQ_TABLET } from 'constants/media';
import { Link } from 'react-router-dom';

interface IListItem {
  selected?: boolean;
}

interface INavigation {
  opened?: boolean;
}

export const Navigation = styled.nav<INavigation>(({ opened }) => ({
  position: 'sticky',
  display: 'flex',
  flexDirection: 'column',
  top: 0,
  height: '100vh',
  minWidth: 300,
  backgroundColor: CONTENTS_BACKGROUND_COLOR,
  transition: '0.3s ease all',
  marginLeft: opened ? 0 : -278,
  zIndex: 1000,
  '& > *:not(button)': {
    transition: '0.3s ease all',
    opacity: opened ? 1 : 0,
  },
  [MQ_TABLET]: {
    position: 'fixed',
    left: 0,
    width: '100%',
    marginLeft: opened ? 0 : '-100%',
  },
}));

export const MainList = styled.ul({
  overflowY: 'auto',
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  padding: '20px 40px',
});

export const BottomList = styled.ul({
  borderTop: '1px solid rgba(0,0,0, 0.1)',
  display: 'flex',
  flexDirection: 'column',
  padding: '20px 40px',
  transition: '0.3s ease all',
});

export const ListItem = styled.li<IListItem>(({ selected }) => ({
  width: '100%',
  listStyle: 'none',
  fontFamily: CONTENT_FONT_FAMILY,
  fontSize: 18,
  paddingBottom: 20,
  fontWeight: selected ? 'bold' : 'initial',
  '&:hover, &:hover *': {
    color: ACTIVE_LINK_COLOR,
  },
  '&:last-child': {
    paddingBottom: 0,
  },
}));

export const CloseButton = styled.button<INavigation>(({ opened }) => ({
  position: 'absolute',
  right: -20,
  background: 'white',
  width: 40,
  height: 40,
  borderRadius: '50%',
  border: `1px solid ${CONTENTS_BACKGROUND_COLOR}`,
  top: 'calc(50% - 20px)',
  cursor: 'pointer',
  transition: '0.3s ease all',
  '&:hover': {
    boxShadow: !opened ? `0 0 10px ${MENU_ICON_COLOR}` : undefined,
  },
  '*': {
    color: MENU_ICON_COLOR,
  },
  [MQ_TABLET]: {
    display: 'none',
  },
}));

export const HomeBlock = styled.div({
  width: '100%',
  borderBottom: '1px solid rgba(0,0,0, 0.1)',
  padding: '20px 40px',
  display: 'flex',
  alignItems: 'center',
  transition: '0.3s ease all',
  justifyContent: 'space-between',
  '& > *:last-child': {
    display: 'none',
    '&:active *': {
      color: ACTIVE_LINK_COLOR,
    },
  },
  [MQ_TABLET]: {
    '& > *:last-child': {
      display: 'block',
    },
  },
});

export const HomeBlockLeft = styled(Link)({
  display: 'flex',
  alignItems: 'center',
  '&:hover *': {
    color: ACTIVE_LINK_COLOR,
  },
});
