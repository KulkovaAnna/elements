import { FC } from 'react';
import { Cell, Container, ListItemContainer } from './styles';

interface Props {
  width?: number | string;
  info: { title: string; value?: string }[];
}

const InfoTable: FC<Props> = ({ width = '100%', info }) => {
  return (
    <Container style={{ width }}>
      {info.map((el, index) => (
        <ListItemContainer key={index}>
          <Cell>
            <b>{el.title}</b>&nbsp;
          </Cell>
          <Cell>{el.value ?? '-'}</Cell>
        </ListItemContainer>
      ))}
    </Container>
  );
};

export default InfoTable;
