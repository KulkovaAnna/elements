import styled from '@emotion/styled';

export const CenteredContainer = styled.div({
  width: '100vw',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  position: 'fixed',
  zIndex: 100,
  top: 0,
  left: 0,
  backgroundColor: 'white',
});

export const Title404 = styled.p({
  fontSize: 64,
  marginBottom: 24,
});

export const Description = styled.p({
  fontSize: 24,
});
