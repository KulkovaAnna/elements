import {
  ACTIVE_LINK_COLOR,
  CONTENTS_BACKGROUND_COLOR,
  IMAGE_BORDER_COLOR,
} from '@/constants/colors';
import { OFFSET_SMALL } from '@/constants/offsets';
import { WIDTH_ARTICLE } from '@/constants/sizes';
import styled from '@emotion/styled';

const IMAGE_SIZE = 160;

export const Container = styled.div({
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
});

export const Block = styled.div({
  maxWidth: WIDTH_ARTICLE,
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
});

export const List = styled.ul({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
});

export const ListItem = styled.li({
  margin: OFFSET_SMALL,
  listStyle: 'none',
  maxWidth: IMAGE_SIZE,
  '&:last-child': {
    marginRight: 0,
    marginBottom: 0,
  },
  '&:hover  span': {
    color: ACTIVE_LINK_COLOR,
  },
});

export const ImageWrapper = styled.div({
  borderRadius: 5,
  position: 'relative',
  width: IMAGE_SIZE,
  height: IMAGE_SIZE,
  border: `1px solid ${IMAGE_BORDER_COLOR}`,
  backgroundColor: CONTENTS_BACKGROUND_COLOR,
});

export const Image = styled.img({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 5,
});

export const Name = styled.span({
  fontSize: 16,
});

export const Title = styled.h2({
  display: 'flex',
  gridArea: 'fullname',
  alignItems: 'center',
  borderBottom: '1px solid rgba(0, 0, 0, 0.3)',
  padding: OFFSET_SMALL,
  margin: `${OFFSET_SMALL}px 0`,
});
