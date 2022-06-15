import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC } from 'react';
import NotFinishedItem from '../NotFinishedItem';
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
          <NotFinishedItem to="#">Бестиарий</NotFinishedItem>
        </ListItem>
        <ListItem onClick={onCloseClick}>
          <NotFinishedItem to="/characters" finished>
            Персонажи
          </NotFinishedItem>
        </ListItem>
        <ListItem>
          <NotFinishedItem to="/contents" finished>
            Читать
          </NotFinishedItem>
        </ListItem>
        <ListItem>
          <NotFinishedItem to="#">История</NotFinishedItem>
        </ListItem>
        <ListItem>
          <NotFinishedItem to="#">Локации</NotFinishedItem>
        </ListItem>
      </MainList>
    </Navigation>
  );
};

export default Contents;
