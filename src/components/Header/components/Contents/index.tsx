import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { CloseButton, ListItem, MainList, Navigation } from './styles';

export interface ContentsProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  isOpen?: boolean;
  onCloseClick?(): void;
}

const Contents: FC<ContentsProps> = ({
  isOpen = false,
  onCloseClick,
  ...rest
}) => {
  return (
    <Navigation opened={isOpen} {...rest}>
      <CloseButton onClick={onCloseClick}>
        <FontAwesomeIcon
          icon={solid('close')}
          size="1x"
          onClick={onCloseClick}
        />
      </CloseButton>
      <MainList>
        <ListItem>
          <Link to="#">Бестиарий</Link>
        </ListItem>
        <ListItem onClick={onCloseClick}>
          <Link to="/characters">Персонажи</Link>
        </ListItem>
        <ListItem>
          <Link to="/contents">Читать</Link>
        </ListItem>
        <ListItem>
          <Link to="#">История</Link>
        </ListItem>
        <ListItem>
          <Link to="#">Локации</Link>
        </ListItem>
      </MainList>
    </Navigation>
  );
};

export default Contents;
