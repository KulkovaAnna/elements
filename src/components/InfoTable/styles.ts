import styled from '@emotion/styled';
import { OFFSET_TINY } from 'constants/offsets';

export const Container = styled.ul({
  width: '100%',
});

export const ListItemContainer = styled.li({
  listStyle: 'none',
  display: 'flex',
  justifyContent: 'space-between',
});

export const Cell = styled.div({
  width: '48%',
  padding: OFFSET_TINY,
  borderRadius: 2,
  margin: '2px 0',
});
