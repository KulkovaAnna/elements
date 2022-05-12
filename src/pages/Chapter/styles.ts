import styled from '@emotion/styled';
import { MQ_MOBILE } from 'constants/media';

export const Container = styled.article({
  display: 'flex',
  width: '100%',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
  paddingTop: 40,
  fontSize: 20,
});

export const Block = styled.div({
  position: 'relative',
  maxWidth: '35em',
});

export const HeroImage = styled.img({
  maxWidth: '100%',
  position: 'absolute',
  bottom: 0,
  maxHeight: '60%',
  objectFit: 'cover',
  [MQ_MOBILE]: {
    position: 'relative',
  },
});

export const Paragraph = styled.p({
  fontSize: 20,
  margin: 16,
  lineHeight: 1.45,
  textAlign: 'justify',
});

export const Title = styled.p({
  fontSize: 26,
  fontWeight: '600',
  margin: 16,
  fontFamily: "'Playfair Display', -apple-system, BlinkMacSystemFont",
});

export const TitleWrapper = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const Navigation = styled.div({
  display: 'flex',
  alignItems: 'center',
  paddingRight: 16,
  '& > *': {
    marginLeft: 5,
  },
});
