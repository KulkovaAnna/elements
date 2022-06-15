import styled from '@emotion/styled';
import { ACTIVE_LINK_COLOR } from 'constants/colors';
import { CONTENT_FONT_FAMILY } from 'constants/font';
import { OFFSET_DEFAULT } from 'constants/offsets';
import { Link } from 'react-router-dom';

type TListItem = {
  inProgress?: boolean;
};

export const LinkItem = styled(Link)<TListItem>(({ inProgress }) => ({
  '&:hover': {
    color: inProgress ? 'initial' : ACTIVE_LINK_COLOR,
  },
  fontFamily: CONTENT_FONT_FAMILY,
  fontSize: 18,
  padding: OFFSET_DEFAULT,
  lineHeight: 1,
  display: 'flex',
  alignItems: 'center',
  opacity: inProgress ? 0.5 : 1,
  pointerEvents: inProgress ? 'none' : 'initial',
}));

export const InProgress = styled.span({
  position: 'absolute',
  transform: 'rotate(25deg)',
  fontSize: 14,
  background:
    'linear-gradient(149deg, rgba(231,196,133,0.4) 0%, rgba(211,142,45,1) 50%, rgba(231,196,133,0.4) 100%)',
});
