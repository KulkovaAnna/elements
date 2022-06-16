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
          <NotFinishedItem href="/bestiary">Бестиарий</NotFinishedItem>
        </ListItem>
        <ListItem onClick={onCloseClick}>
          <NotFinishedItem href="/characters" finished>
            Персонажи
          </NotFinishedItem>
        </ListItem>
        <ListItem>
          <NotFinishedItem href="/chapters/1" finished>
            Читать
          </NotFinishedItem>
        </ListItem>
        <ListItem>
          <NotFinishedItem href="/lore">История</NotFinishedItem>
        </ListItem>
        <ListItem>
          <NotFinishedItem href="/locations">Локации</NotFinishedItem>
        </ListItem>
      </MainList>
    </Navigation>
  );
};

export default Contents;
