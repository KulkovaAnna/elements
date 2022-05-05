import styled from '@emotion/styled';
import { MQ_MOBILE } from 'constants/media';

export const Container = styled.div({
  display: 'flex',
  width: '100%',
  flexWrap: 'wrap',
  background: `linear-gradient(
    150deg,
    rgba(205, 148, 79, 1) 0%,
    rgba(205, 148, 79, 0.6) 45%,
    rgba(205, 148, 79, 0.2) 100%
  )`,
  justifyContent: 'center',
});

export const HalfBlock = styled.div({
  position: 'relative',
  paddingTop: '5%',
  width: '50%',
  height: '100vh',
  [MQ_MOBILE]: {
    width: '100%',
    paddingTop: '10%',
    height: 'auto',
  },
});

export const RightBlock = styled(HalfBlock)({
  overflowY: 'auto',
  paddingLeft: '2%',
  paddingRight: '2%',
  [MQ_MOBILE]: {
    overflowY: 'initial',
    height: 'auto',
  },
});

export const Name = styled.p({
  fontSize: '14vmax',
  fontWeight: '600',
  margin: 0,
  lineHeight: 0.5,
  marginBottom: 50,
  marginLeft: '10%',
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

export const Description = styled.p({
  fontSize: 20,
  width: '80%',
  fontWeight: '600',
  border: '3px double brown',
  padding: 5,
  color: '#333',
  marginBottom: 15,
  [MQ_MOBILE]: {
    width: '100%',
    paddingRight: 20,
  },
});

export const Paragraph = styled.p({
  fontSize: 16,
  width: '80%',
  marginBottom: 15,
  [MQ_MOBILE]: {
    width: '100%',
    paddingRight: 20,
  },
});

export const Title = styled.p({
  fontSize: 18,
  fontWeight: '600',
  marginBottom: 15,
});

export const TitleWrapper = styled.div({
  display: 'flex',
});
