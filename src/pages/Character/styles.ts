import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CONTENT_FONT_FAMILY } from 'constants/font';
import { MQ_MOBILE, MQ_TABLET } from 'constants/media';

type WithMainProps = {
  main?: boolean;
};

export const Container = styled.div({
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  position: 'relative',
});

export const CenteredContainer = styled.div({
  display: 'flex',
  width: '100%',
  height: '100vh',
  alignItems: 'center',
  justifyContent: 'center',
});

export const Navigation = styled.nav({
  position: 'sticky',
  top: 0,
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  minWidth: 300,
  backgroundColor: '#edeef0',
  padding: 40,
  [MQ_TABLET]: {
    position: 'initial',
    display: 'none',
  },
});

export const Main = styled.article({
  padding: 40,
  [MQ_TABLET]: {
    padding: 20,
  },
});

export const ImageWrapper = styled.div<WithMainProps>(() => ({
  justifyContent: 'initial',
  margin: '0 0 10px 30px',
  padding: 10,
  minWidth: 375,
  maxWidth: '30%',
  float: 'right',
  border: '1px solid #dcdcdc',
  backgroundColor: '#edeef0',
  borderRadius: 5,
  [MQ_MOBILE]: {
    padding: 20,
    float: 'initial',
    margin: '20px auto',
  },
}));

export const Name = styled.p({
  gridArea: 'name',
  fontSize: '8vmax',
  fontWeight: '600',
  margin: 0,
  marginBottom: 20,
  fontFamily: "'Playfair Display', -apple-system, BlinkMacSystemFont",
  borderBottom: '0',
  [MQ_TABLET]: {
    borderBottom: '1px solid rgba(0, 0 , 0, 0.1)',
  },
});

export const HeroImage = styled.img({
  maxWidth: '100%',
  maxHeight: '100%',
  objectFit: 'cover',
  borderRadius: 5,
  border: '1px solid #dcdcdc',
});

export const Description = styled.span({
  gridArea: 'description',
  fontSize: 18,
  fontWeight: '600',
  lineHeight: 1.3,
  [MQ_TABLET]: {
    width: '100%',
    paddingRight: 20,
  },
});

export const Paragraph = styled.p({
  fontSize: 20,
  marginBottom: 15,
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
  backgroundColor: '#FFFFFF',
  width: '100%',
  fontFamily: "'Playfair Display', -apple-system, BlinkMacSystemFont",
});

export const TitleWrapper = styled.a({
  display: 'flex',
  gridArea: 'fullname',
  alignItems: 'center',
  borderBottom: '1px solid rgba(0, 0, 0, 0.3)',
  padding: '10px 0',
  margin: '10px 0',
  [MQ_TABLET]: {
    borderBottomColor: 'rgba(0, 0 , 0, 0.1)',
  },
});

export const List = styled.ul({});

export const ListItem = styled.li({
  listStyle: 'none',
  fontFamily: CONTENT_FONT_FAMILY,
  fontSize: 18,
  paddingBottom: 20,
});

export const ChevronIcon = styled(FontAwesomeIcon)({
  display: 'none',
  [MQ_TABLET]: {
    display: 'block',
  },
});
