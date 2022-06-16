import styled from '@emotion/styled';
import { CONTENT_FONT_FAMILY } from '@/constants/font';
import NextLink from 'next/link';

export const Container = styled.div({
  display: 'flex',
  '*': {
    color: '#555',
    fontFamily: CONTENT_FONT_FAMILY,
  },
});

export const Link = styled(NextLink)({
  ':hover': {
    color: '#4c609c',
  },
});
